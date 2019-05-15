package com.zq.form.controller;

import com.zq.form.domain.Page;
import com.zq.form.service.SolrService;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.SolrInputDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

/**
 * @Author huizi.liao
 * @Date 2019/4/30 17:35
 */
@RestController
public class SolrController {

    private final String db_core = "stuform_core";
    private final String dataImport = db_core + "/dataimport?command=full-import&clean=false&commit=true&entity=books";

    @Value("${spring.data.solr.host}")
    private String solrHost;
    @Autowired
    private SolrClient client;
    @Autowired
    private SolrService solrService;

    /**
     * @Author huizi
     * @Description 新增/修改索引
     * 当id存在的时候，此方法修改，如果id不存在，则新增
     * @Date 17:40 2019/4/30
     * @Param
     **/
    @RequestMapping("add")
    public String add(@RequestParam String key,@RequestParam String content){
        String uuid = UUID.randomUUID().toString().replaceAll("-","");
        try {
            SolrInputDocument doc = new SolrInputDocument();
            doc.setField("id",uuid);
            doc.setField(key,content);
            //如果spring.data.solr.host 里配置到core了，那么这里就不需要传参数
            client.add(db_core,doc);
            client.commit(db_core);
            return uuid;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "error";
    }

    /**
     * @Author huizi
     * @Description 删除所有索引
     * @Date 17:47 2019/4/30
     * @Param
     **/
    @RequestMapping("deleteAll")
    public String deleteAll(){
        try {
            solrService.deleteAll(db_core);
            System.out.println("删除索引成功！");
            return "Success";
        }catch (Exception e){
            e.printStackTrace();
        }
        return "error";
    }

    /**
     * @Author huizi
     * @Description 根据id查询索引
     * @Date 17:49 2019/4/30
     * @Param
     **/
    @RequestMapping("getById/{id}")
    public String getById(@PathVariable String id) throws Exception{
        SolrDocument document = solrService.getById(db_core,id);
        System.out.println(document);
        return document.toString();
    }

    /**
     * @Author huizi
     * @Description 综合查询：有条件查询，条件过来，排序，分页，高亮显示，获取部分域信息
     * @Date 17:51 2019/4/30
     * @Param
     **/
    @RequestMapping("query/{q}")
    public Page query(@PathVariable String q,
                                  @RequestParam(value="start",required = false,defaultValue = "0") int  start,
                                  @RequestParam(value="rows",required = false,defaultValue = "10") int  rows,
                                  @RequestParam(value="page",required = false,defaultValue = "1") int  page){
        SolrDocumentList results = null;
        Page page1 = new Page();
        try {
            //page1.setPageSize(rows);
            page1 = solrService.querySolr(db_core,q,"keyword",start,rows,page);
            //page1.setResults(results);
            //System.out.println("==============："+results);
        }catch (Exception e){
            e.printStackTrace();
        }
        return page1;
    }

    /*@RequestMapping("query/pages")
    public Page pageQuery(){
        Page results = null;
        try {
            results = solrService.pageSolr();
            System.out.println("总页数："+results);
        }catch (Exception e){
            e.printStackTrace();
        }
        return results;
    }*/

    /**
     * 刷新索引
     */
    @RequestMapping("/dataimport")
    public String dataimport(){
        // 1、清空索引，生产环境不建议这样使用，可以保存文件新建及更新时间，增量创建索引
        try {
            solrService.deleteAll(db_core);
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 2、创建索引
        Mono<String> result = WebClient.create(solrHost)
                .get()
                .uri(dataImport)
                .retrieve()
                .bodyToMono(String.class);
        System.out.println(result.block());
        return "success";
    }

    /**
     * 定时器
     **/
    //cron代表的是时间  如下代表 每天23点59分59秒执行一次
    @Scheduled(cron = "59 59 23 * * ?")
    public void timer() throws Exception{
        //获取当前时间
        LocalDateTime localDateTime =LocalDateTime.now();
        //输出当前时间
        System.out.println("当前时间为:" + localDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        dataimport();
    }

}

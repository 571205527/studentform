package com.zq.form.service.impl;

import com.zq.form.domain.Page;
import com.zq.form.domain.StuApplicationForm;
import com.zq.form.enums.ResultEnum;
import com.zq.form.exception.SystemException;
import com.zq.form.service.SolrService;
import org.apache.commons.lang3.StringUtils;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;


/**
 * @Author huizi.liao
 * @Date 2019/4/30 17:40
 */
@Service
public class SolrServiceImpl implements SolrService {

    @Autowired
    private SolrClient client;

    /**
     * @Author huizi
     * @Description TODO
     * @Date 11:33 2019/5/14
     * @Param [collection, q, field, start, rows]
     **/
    @Override
    public Page querySolr(String collection, String q, String field,int start,int rows,int page) throws IOException, SolrServerException {
        SolrQuery params = new SolrQuery();
        SolrDocumentList results = null;
        Page pageHtml = pageSolr(rows);
        pageHtml.setCurrentPage(page);
        if(q.equals("*")){
            //查询条件 q 标识高亮显示的地方
            params.set("q",q);
            //分页
            page = page>=1?page-1:page;
            params.setStart(rows * page);
            params.setRows(rows);
        }else{
            //查询条件 q 标识高亮显示的地方
            params.set("q",q);
            //分页
            params.setStart(start);
            params.setRows(rows);
            //long numFound = results.getNumFound();//查询到的记录总数
            //System.out.println("记录总数："+numFound);
        }
        // df 代表默认的查询字段
        params.set("df",field);
        QueryResponse queryResponse = client.query(collection,params);
        results = queryResponse.getResults();
        pageHtml.setResults(results);
        return pageHtml;
    }

    //获取page对象
    @Override
    public Page pageSolr(int pageSize) throws IOException, SolrServerException {
        SolrQuery params = new SolrQuery();
        Page page = new Page();
        //查询条件 q
        params.set("q","*");
        //分页
        //start 将初始偏移量指定到结果集中。可用于对结果进行分页。默认值为 0
        params.setStart(0);
        params.setRows(0);
        // df 代表默认的查询字段
        params.set("df","keyword");
        QueryResponse queryResponse = client.query("stuform_core",params);
        SolrDocumentList results = queryResponse.getResults();
        long pageCount = results.getNumFound();//查询到的记录总数
        page.setTotalCount((int) pageCount);//总页数
        page.setPageSize(pageSize);
        //System.out.println(page.getTotalPageCount());
        return page;
    }

    @Override
    public SolrDocument getById(String collection, String id) throws IOException, SolrServerException {
        return client.getById(id);
    }

    @Override
    public void deleteAll(String collection) throws IOException, SolrServerException {
        client.deleteByQuery(collection,"*:*");
        client.commit(collection);
    }
}

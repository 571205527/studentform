package com.zq.form.controller;

import com.zq.form.domain.Page;
import com.zq.form.service.SolrService;
import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

/**
 * @Author huizi.liao
 * @Date 2019/5/4 15:13
 */
@Controller
public class IndexController {

    @Autowired
    private SolrService solrService;

    /**
     * 首页
     * @return
     */
    @RequestMapping("/search")
    public ModelAndView index() throws IOException, SolrServerException {
        Page page = new Page();
        page = solrService.pageSolr(10);
        ModelAndView mav = new ModelAndView("search");
        mav.addObject("type","db");
        mav.addObject("page", page);
        return mav;
    }
}

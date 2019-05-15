package com.zq.form.service;

import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import com.zq.form.domain.Page;
import java.io.IOException;

public interface SolrService {

    // Solr 查询
    Page querySolr(String collection, String q, String field,int start,int rows, int page) throws IOException, SolrServerException;

    Page<SolrDocumentList> pageSolr(int page) throws IOException, SolrServerException;

    // 根据id 查询
    SolrDocument getById(String collection, String id) throws IOException, SolrServerException;

    //删除全部索引
    void deleteAll(String collection)throws IOException, SolrServerException;

}

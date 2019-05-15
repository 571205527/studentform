package com.zq.form.exception;

import com.zq.form.util.Result;
import com.zq.form.util.ResultUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @Author huizi.liao
 * @Date 2019/2/15 15:55
 * 统一异常处理
 */
@Slf4j
@RestControllerAdvice
public class ExceptionHandle {

    @ExceptionHandler(value = SystemException.class)
    public Result systemException(SystemException systemException){

        log.error("[自定义异常]{}", systemException);

        return  ResultUtil.error(systemException.getCode(), systemException.getMessage());
    }

    @ExceptionHandler(value = Exception.class)
    public Result exception(Exception e){

        log.error("[系统异常]{}", e);
        return ResultUtil.error(-1, "just error:" + e.getMessage());
    }

}

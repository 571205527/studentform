package com.zq.form.exception;


/**
 * @Author huizi.liao
 * @Date 2019/2/15 15:55
 * 自定义异常
*/
public class SystemException extends RuntimeException {

    private Integer code;

    public SystemException(Integer code,String message){
        super(message);
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}

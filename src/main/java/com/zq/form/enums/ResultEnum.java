package com.zq.form.enums;

/**
 * @Author huizi.liao
 * @Date 2019/2/15 15:46
 * 返回值枚举
 */
public enum ResultEnum {

    SUCCESS(0, "success"),
    PARAM_ERROR(10, "参数不正确"),
    FAILURE(1, "failure"),
    UNKNOWN_ERROR(-1, "error"),
    UNAUTHENTICATED(401, "Unauthorized"),
    FORBIDDEN(403, "Forbidden, lack of permissions"),
    LOGIN_FAIL(25, "登录失败, 登录信息不正确"),
    LOGOUT_SUCCESS(26, "登出成功"),
    WECHAT_ERROR(20, "微信账号错误"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error");


    ResultEnum(Integer code, String msg){
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    private Integer code;
    private String msg;
}

package co.hotzo.portal.common.api;

import lombok.Getter;

@Getter
public class ApiResponse<T> {
    private int status;
    private String message;
    private T result;

    public ApiResponse(int status, String message, T result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }

    public static <T> ApiResponse<T> ok(T result) {
        return new ApiResponse<>(200, "SUCCESS", result);
    }
}

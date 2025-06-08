package co.hotzo.portal.auth.adaptor.in.web.api;

import co.hotzo.portal.auth.adaptor.in.web.request.JoinMemberRequest;
import co.hotzo.portal.auth.adaptor.in.web.response.JoinMemberResponse;
import co.hotzo.portal.common.api.ApiResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @PostMapping("/join")
    public ApiResponse<JoinMemberResponse> joinMember(@RequestBody JoinMemberRequest joinRequest, HttpServletResponse response) {
        Cookie cookie = new Cookie("hsessionid", UUID.randomUUID().toString());
        cookie.setHttpOnly(true);
        response.addCookie(cookie);

        return ApiResponse.ok(new JoinMemberResponse(1L));
    }
}

package co.hotzo.portal.auth.adaptor.in.web.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JoinMemberRequest {
    private String memberName;
    private String email;
    private String password;
}

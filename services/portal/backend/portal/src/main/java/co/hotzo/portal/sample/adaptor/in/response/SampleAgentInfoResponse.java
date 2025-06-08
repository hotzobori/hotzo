package co.hotzo.portal.sample.adaptor.in.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SampleAgentInfoResponse {
    private String agentId;
    private String agentName;
    private String agentEmail;
}

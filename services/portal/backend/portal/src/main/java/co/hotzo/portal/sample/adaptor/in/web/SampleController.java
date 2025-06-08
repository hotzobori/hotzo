package co.hotzo.portal.sample.adaptor.in.web;

import co.hotzo.portal.sample.adaptor.in.response.SampleAgentInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/sample")
public class SampleController {

    @GetMapping("/agent/info")
    public ResponseEntity<SampleAgentInfoResponse> sampleAgentInfo() {
        String agentId = UUID.randomUUID().toString();
        String agentName = "Sample Agent " + agentId;
        String agentEmail = agentId + "@hotzo.co";

        return new ResponseEntity<>(new SampleAgentInfoResponse(agentId, agentName, agentEmail), HttpStatus.OK);
    }
}

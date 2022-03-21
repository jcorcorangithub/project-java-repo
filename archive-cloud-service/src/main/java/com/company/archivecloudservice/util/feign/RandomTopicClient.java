package com.company.archivecloudservice.util.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "random-topic-service")
public interface RandomTopicClient {

    @GetMapping("/randomTopic")
    public String getRandomTopic();
}

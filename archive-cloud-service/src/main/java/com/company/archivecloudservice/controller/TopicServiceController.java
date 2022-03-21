package com.company.archivecloudservice.controller;

import com.company.archivecloudservice.util.feign.RandomTopicClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class TopicServiceController {

    @Autowired
    private final RandomTopicClient client;

    TopicServiceController(RandomTopicClient client) {
        this.client = client;
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @GetMapping("/randomTopic")
    public String randomTopic() {
        return client.getRandomTopic();
    }
}

//    @Autowired
//    private DiscoveryClient discoveryClient;
//
//    private RestTemplate restTemplate = new RestTemplate();
//
//    @Value("${randomTopicServiceName}")
//    private String randomTopicServiceName;
//
//    @Value("${serviceProtocol}")
//    private String serviceProtocol;
//
//    @Value("${servicePath}")
//    private String servicePath;
//
//    @Value("${officialTopic}")
//    private String officialTopic;



//        List<ServiceInstance> instances = discoveryClient.getInstances(randomTopicServiceName);
//
//        String randomTopicServiceUri = serviceProtocol + instances.get(0).getHost() + ":" + instances.get(0).getPort() + servicePath;
//
//        String topic = restTemplate.getForObject(randomGreetingServiceUri, String.class);


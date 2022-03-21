package com.company.randomtopicservice.controller;

import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RefreshScope
public class RandomTopicServiceController {

    // something to hold our topics
    private List<String> topicList = new ArrayList<>();
    // so we can randomly return a topic
    private Random rndGenerator = new Random();

    public RandomTopicServiceController() {

        // some topics
        topicList.add("Learn a historical fact!");
        topicList.add("Read a self-help article");
        topicList.add("Research an article about human psychology");
        topicList.add("Study a socio-economic topic about your city");
        topicList.add("Read a fun novel");
    }

//    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @GetMapping("/randomTopic")
    public String getRandomTopic() {

        // select and return a random topic
        int whichTopic = rndGenerator.nextInt(5);
        return topicList.get(whichTopic);
    }

}

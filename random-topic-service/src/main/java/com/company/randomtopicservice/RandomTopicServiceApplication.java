package com.company.randomtopicservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient
public class RandomTopicServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RandomTopicServiceApplication.class, args);
	}

}

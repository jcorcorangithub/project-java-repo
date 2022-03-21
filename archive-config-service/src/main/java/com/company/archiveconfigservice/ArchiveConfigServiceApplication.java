package com.company.archiveconfigservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ArchiveConfigServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArchiveConfigServiceApplication.class, args);
	}

}

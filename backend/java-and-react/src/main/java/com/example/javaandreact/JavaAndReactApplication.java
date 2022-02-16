package com.example.javaandreact;

import com.example.javaandreact.model.User;
import com.example.javaandreact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaAndReactApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(JavaAndReactApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		User user1 = User.builder()
				.firstName("Ada")
				.lastName("Lovelace")
				.email("ada@lovelace.com")
				.build();

		User user2 = User.builder()
				.firstName("Grace")
				.lastName("Hopper")
				.email("grace@hopper.com")
				.build();

		User user3 = User.builder()
				.firstName("Margaret")
				.lastName("Hamilton")
				.email("margaret@hamilton.com")
				.build();

		User user4 = User.builder()
				.firstName("Katherine")
				.lastName("Johnson")
				.email("katherine@johnson.com")
				.build();

		userRepository.save(user1);
		userRepository.save(user2);
		userRepository.save(user3);
		userRepository.save(user4);

	}
}

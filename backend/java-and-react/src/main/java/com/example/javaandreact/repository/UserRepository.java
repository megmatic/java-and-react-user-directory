package com.example.javaandreact.repository;

import com.example.javaandreact.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

package com.example.demo.reposetry;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Users;

public interface UserReposetry extends JpaRepository<Users, Integer> {

	Optional<Users> findByUsername(String username);

	

}

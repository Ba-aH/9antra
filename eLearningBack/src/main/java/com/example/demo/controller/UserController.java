package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.reposetry.FeedbackReposetry;
import com.example.demo.reposetry.UserReposetry;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	 @Autowired
	    private  UserReposetry userReposetry;
	 
	 
	 @GetMapping()
		List<Users> all()
		{
			return userReposetry.findAll();
		}
	 
		@PostMapping("/login")
		Users findByUsername(@RequestBody Users v)
		{
			System.out.println(v.getUsername());
			Optional<Users> user=userReposetry.findByUsername(v.getUsername());
			System.out.println(user.isPresent());
			if (user.isPresent())
			{
				Users realUtilisateur =user.get();
				System.out.println();
				if (realUtilisateur.getPassword().compareTo(v.getPassword())==0)	
				{
					return realUtilisateur ;
				}		
			}
			return null;
		}
		
		
		@PostMapping("")
		Users add(@RequestBody Users newUser)
		{
			return userReposetry.save(newUser);
		}
		
		@GetMapping("/{id}")
		Optional<Users> one(@PathVariable int id)
		{
			return userReposetry.findById(id);
		}
		
		
		
		
	 
}

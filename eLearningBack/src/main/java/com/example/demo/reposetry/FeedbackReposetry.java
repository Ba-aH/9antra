package com.example.demo.reposetry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Course;
import com.example.demo.entity.Feedback;

public interface FeedbackReposetry extends JpaRepository<Feedback, Long >{

}

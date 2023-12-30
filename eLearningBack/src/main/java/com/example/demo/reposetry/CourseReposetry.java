package com.example.demo.reposetry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Course;


public interface CourseReposetry extends JpaRepository<Course, Long >{

}

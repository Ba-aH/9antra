package com.example.demo.controller;

import jakarta.persistence.GeneratedValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Course;
import com.example.demo.reposetry.CourseReposetry;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("")	
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
    @Autowired
    private  CourseReposetry courseReposetry;

    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return  courseReposetry.findAll();

    }


    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCoursesByID(@PathVariable Long id){
        Course course=courseReposetry.findById(id).orElseThrow(()->new RuntimeException("course does not exisit"));
        return  ResponseEntity.ok(course);

    }


    @PostMapping("/courses")
    public Course  createCourse(@RequestBody Course course ){

        return  courseReposetry.save(course);
    }
    
    @PutMapping("courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id ,@RequestBody Course coursedDetails){


        Course course=courseReposetry.findById(id).orElseThrow(()->new RuntimeException("course does not exisit"));
        course.setTiltle(coursedDetails.getTiltle());
        course.setDescription(coursedDetails.getDescription());
        course.setPrice(coursedDetails.getPrice());
        course.setPeriod(coursedDetails.getPeriod());
        course.setImage(coursedDetails.getImage());

        Course updatedCourse= courseReposetry.save(course);
        return  ResponseEntity.ok(updatedCourse);

    }
    
    
    @DeleteMapping("courses/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Long id){

        Course course=courseReposetry.findById(id).orElseThrow(()->new RuntimeException("course does not exisit"));

        courseReposetry.delete(course);
        Map<String, Boolean> Response=new HashMap<>();
        Response.put("DELETED",Boolean.TRUE);

        return  ResponseEntity.ok(Response);



    }

}

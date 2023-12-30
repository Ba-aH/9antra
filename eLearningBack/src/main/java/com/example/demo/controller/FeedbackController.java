package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Course;
import com.example.demo.entity.Feedback;
import com.example.demo.reposetry.CourseReposetry;
import com.example.demo.reposetry.FeedbackReposetry;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackController {
	 @Autowired
	    private  FeedbackReposetry feedbackReposetry;
	 	
	 
	  @GetMapping("/feedbacks")
	    public List<Feedback> getAllCourses(){
	        return  feedbackReposetry.findAll();
	    }
	  
	  @GetMapping("/feedbacks/{id}")
	    public ResponseEntity<Feedback> getCoursesByID(@PathVariable Long id){
	        Feedback feedback=feedbackReposetry.findById(id).orElseThrow(()->new RuntimeException("feedback does not exisit"));
	        return  ResponseEntity.ok(feedback);
	    }
	  
	  @PostMapping("/feedbacks")
	    public Feedback  createFeedback(@RequestBody Feedback feedback ){
	        return  feedbackReposetry.save(feedback);
	    }
	  
	  @PutMapping("feedbacks/{id}")
	    public ResponseEntity<Feedback> updateFeedback(@PathVariable Long id ,@RequestBody Feedback feedbackDetails){
		    Feedback feedback=feedbackReposetry.findById(id).orElseThrow(()->new RuntimeException("feedback does not exisit"));
		    feedback.setName(feedbackDetails.getName());
		    feedback.setEmail(feedbackDetails.getEmail());
	        
		    Feedback updatedFeedback= feedbackReposetry.save(feedback);
	        return  ResponseEntity.ok(updatedFeedback);
	    }
	  
	  @DeleteMapping("feedbacks/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteFeedback(@PathVariable Long id){

		  Feedback feedback=feedbackReposetry.findById(id).orElseThrow(()->new RuntimeException("feedback does not exisit"));

		  feedbackReposetry.delete(feedback);
	        Map<String, Boolean> Response=new HashMap<>();
	        Response.put("DELETED",Boolean.TRUE);

	        return  ResponseEntity.ok(Response);



	    }

}

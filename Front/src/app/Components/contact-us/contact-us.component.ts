import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyDataService } from 'src/app/Services/my-data.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  myform: FormGroup;

  New_feedback: any = {
    name: "",
    email: "",
    message: "" ,
  };

  constructor(private myDataService:MyDataService){
    this.myform = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    }); 


  }



  ngOnInit(): void {  
    debugger;
  }

  addFeedback() {
    this.New_feedback.name = this.myform.value['name'];
    this.New_feedback.email = this.myform.value['email']; 
    this.New_feedback.message = this.myform.value['message'];

    console.log(this.New_feedback);

   this.myDataService.addToFeedbacks(this.New_feedback).subscribe();
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyDataService } from 'src/app/Services/my-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myform: FormGroup;

  New_user: any = {
    username: "",
    password: "",
    prenom: "" ,
    nom:"",
  };

  constructor(private myDataService:MyDataService) {
    this.myform = new FormGroup({
      username: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }


  addFeedback() {
    this.New_user.first_name = this.myform.value['first_name'];
    this.New_user.username = this.myform.value['email']; 
    this.New_user.password = this.myform.value['email']; 
    this.New_user.prenom = this.myform.value['message'];

    console.log(this.New_user);

   this.myDataService.addToFeedbacks(this.New_user).subscribe();
  }

}

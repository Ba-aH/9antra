import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  myform: FormGroup;
  


  constructor() {
    this.myform = new FormGroup({
      title: new FormControl(''),
      price: new FormControl('')
    });
  }
  
}


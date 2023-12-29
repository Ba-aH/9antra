import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  myform: FormGroup;


  constructor() {
    this.myform = new FormGroup({
      username: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    });
  }
}

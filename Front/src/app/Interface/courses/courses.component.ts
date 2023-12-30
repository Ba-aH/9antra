import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDataService } from 'src/app/Services/my-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  myData: any ;


  constructor (private myDataService:MyDataService){}

  ngOnInit(): void {
    this.myDataService.getCourses().subscribe((data)=>{
      this.myData = data
    });

  }



}

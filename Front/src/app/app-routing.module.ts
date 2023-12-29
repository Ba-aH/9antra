import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './Components/courses/courses.component';
import { AddCourseComponent } from './Components/add-course/add-course.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DiscoverCoursesComponent } from './Components/discover-courses/discover-courses.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'landing-page', component:LandingPageComponent
  },
  {
    path:'contact-us', component:ContactUsComponent
  },
  {
    path:'courses', component:CoursesComponent
  },
  {
    path:'discover-courses', component:DiscoverCoursesComponent
  },

  {
    path:'add-course', component:AddCourseComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

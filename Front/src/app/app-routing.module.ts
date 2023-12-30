import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './Interface/Admin/add-course/add-course.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DiscoverCoursesComponent } from './Components/discover-courses/discover-courses.component';
import { HomeComponent } from './Interface/Client/home/home.component';
import { SignUpComponent } from './Interface/Client/sign-up/sign-up.component';
import { CoursesComponent } from './Interface/courses/courses.component';

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
    path:'discover-courses', component:DiscoverCoursesComponent
  },

  {
    path:'add-course', component:AddCourseComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'feedbacks',component:ContactUsComponent
  },
  {
    path:'courses',component:CoursesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

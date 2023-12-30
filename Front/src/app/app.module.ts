import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DiscoverCoursesComponent } from './Components/discover-courses/discover-courses.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AddCourseComponent } from './Interface/Admin/add-course/add-course.component';
import { HomeComponent } from './Interface/Client/home/home.component';
import { SignUpComponent } from './Interface/Client/sign-up/sign-up.component';
import { LoginComponent } from './Interface/login/login.component';
import { DashboardComponent } from './Interface/Admin/dashboard/dashboard.component';
import { ViewCoursesComponent } from './Interface/Client/view-courses/view-courses.component';
import { ManageCoursesComponent } from './Interface/Admin/manage-courses/manage-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './Interface/courses/courses.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    DiscoverCoursesComponent,
    ContactUsComponent,
    AddCourseComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    ViewCoursesComponent,
    CoursesComponent,
    ManageCoursesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

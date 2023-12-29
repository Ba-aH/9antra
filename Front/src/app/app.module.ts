import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DiscoverCoursesComponent } from './Components/discover-courses/discover-courses.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AddCourseComponent } from './Components/add-course/add-course.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    DiscoverCoursesComponent,
    CoursesComponent,
    ContactUsComponent,
    AddCourseComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

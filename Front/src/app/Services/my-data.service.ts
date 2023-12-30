import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Observable ,Subject} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class MyDataService {
  api_url: string = 'http://localhost:8088/';
  
  constructor(private http: HttpClient) { }


  addToFeedbacks(obj: any): Observable<any> {
    debugger;
    return this.http.post<any>(this.api_url+"feedbacks",obj) ;
  }

  addUser(obj: any): Observable<any> {
    debugger;
    return this.http.post<any>(this.api_url+"login",obj) ;
  }

  getCourses(): Observable<any> {
    debugger;
    return this.http.get(this.api_url + 'courses');
  }
  
}

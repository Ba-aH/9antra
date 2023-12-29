import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-landing-page></app-landing-page>
    <app-discover-courses></app-discover-courses>
    <app-contact-us></app-contact-us>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

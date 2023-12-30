import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectCoursesComponent } from './inspect-courses.component';

describe('InspectCoursesComponent', () => {
  let component: InspectCoursesComponent;
  let fixture: ComponentFixture<InspectCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectCoursesComponent]
    });
    fixture = TestBed.createComponent(InspectCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCoursesComponent } from './discover-courses.component';

describe('DiscoverCoursesComponent', () => {
  let component: DiscoverCoursesComponent;
  let fixture: ComponentFixture<DiscoverCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverCoursesComponent]
    });
    fixture = TestBed.createComponent(DiscoverCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

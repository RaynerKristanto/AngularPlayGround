import { CourseComponent } from './../course/course.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "Dynamically Update Quantity";
  @ViewChildren(CourseComponent) ccs:QueryList<CourseComponent>;
  total = 0;
  courses = Array(5).fill(1);
  constructor(service: CoursesService) { 
 
  }

  ngOnInit() {
  }
  calculateTotal() {
    this.total = 0;
    for(let c of this.ccs['_results']) {
      this.total = this.total + parseInt(c['quantity']);
    }
  }

}

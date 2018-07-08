import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private quantity: number= 0;
  constructor() { 
  }

  ngOnInit() {
  }
  
  setQuantity(event) {
    this.quantity = event.target.value;
  }
  getQuantity() {
    return this.quantity;
  }
}

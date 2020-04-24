import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  myson = 'Suchith';
  color=true;
  courses;
  isActive = true;
  onClick($event) {console.log ('button clicked'), $event };
  nameValue(){console.log(this.myson)};

  constructor(listservice: CourseService) { 
    this.courses = listservice.getCourses();
   
  }


  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() {

    return ['Deepak','Suchith','Bindu'];

   }

  constructor() { 

  }
}

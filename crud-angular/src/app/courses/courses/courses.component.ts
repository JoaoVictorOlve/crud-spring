import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, tap, take, first } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];


  constructor(private coursesService: CoursesService){
    this.courses = this.coursesService.list()
    .pipe(
      first(),
      tap(courses => console.log(courses))
    )
  }

  ngOnInit():void{

  }

}

import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.css']
})
export class OfAndFromComponent implements OnInit{
  listOfCourses:string[] = [];

  ngOnInit(): void {
      this.emitDataFromOf();
      this.emitDataFromFrom();
  }

  emitDataFromOf(){
    of('HTML','CSS','JAVASCRIPT').subscribe((data) => {
      this.listOfCourses.push(data);
    })
  }

  emitDataFromFrom(){
    this.listOfCourses.length = 0;
    from(['HTML','CSS','JAVASCRIPT']).subscribe((data) => {
      this.listOfCourses.push(data);
    })
  }

}

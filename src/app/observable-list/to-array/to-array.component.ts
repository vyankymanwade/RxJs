 import { Component, OnInit } from '@angular/core';
import { interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit{

  stringifiedNumberArray:string = 'Please wait.....';


  ngOnInit(): void {
      interval(1000).pipe(take(5),toArray()).subscribe((numberArray) => {
        this.stringifiedNumberArray = numberArray.toString();
      })
  }
}

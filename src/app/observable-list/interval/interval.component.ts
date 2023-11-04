import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements AfterViewInit{

  @ViewChild('videoStop') videoStop!:ElementRef;
  intervalSubscription:Subscription = new Subscription();

  listOfVideos:string[] = [];

  ngAfterViewInit(): void {
      this.intervalSubscription =  interval(1000).subscribe(number => {
        this.listOfVideos.push('video' + number.toString());
      })
  }

  onStop(){
    this.intervalSubscription.unsubscribe();
  }
}

import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { count, fromEvent, Subscription } from 'rxjs';
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit,OnDestroy{

  @ViewChild('videoSourceButton') videoSourceButton !: ElementRef;
  videoSubscription:Subscription = new Subscription();

  listOfVideos:string[] = [];
  ngAfterViewInit(): void {
      this.videoSubscription =  fromEvent(this.videoSourceButton.nativeElement,'click').subscribe((data) =>{
        this.populateVideos();
      })
  }

  populateVideos(){
    this.listOfVideos.push(`Video`)
  }

  ngOnDestroy(): void {
      this.videoSubscription.unsubscribe();
  }
}

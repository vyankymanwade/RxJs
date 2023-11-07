import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObservableModel } from 'src/app/Models/observableModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private router:Router,private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
      
  }
  
  observableList:ObservableModel[] = [
    new ObservableModel('fromEvent','Creates an Observable that emits events of a specific type coming from the given event target.'),
    new ObservableModel('interval','Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.'),
    new ObservableModel('of-and-from','Converts the arguments to an observable sequence..'),
    new ObservableModel('to-array','Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.'),
    new ObservableModel('custom-observable','Creates a custom observable'),
    new ObservableModel('map-and-filter','Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable. Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.'),
    new ObservableModel('retry','If the source Observable calls error, this method will resubscribe to the source Observable for a maximum of count resubscriptions rather than propagating the error call.')
  ]


  onObservableSelection(observable:ObservableModel){
    console.log(observable);
    this.router.navigate([`${observable?.name}`],{
      relativeTo:this.activatedRoute
    })
  }
}

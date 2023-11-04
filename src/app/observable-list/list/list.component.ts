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
    new ObservableModel('interval','Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.')
  ]


  onObservableSelection(observable:ObservableModel){
    console.log(observable);
    this.router.navigate([`${observable?.name}`],{
      relativeTo:this.activatedRoute
    })
  }
}

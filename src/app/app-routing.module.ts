import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomObservableComponent } from './observable-list/custom-observable/custom-observable.component';
import { DebounceTimeAndDistinctUntilChangedComponent } from './observable-list/debounce-time-and-distinct-until-changed/debounce-time-and-distinct-until-changed.component';
import { FromEventComponent } from './observable-list/from-event/from-event.component';
import { IntervalComponent } from './observable-list/interval/interval.component';
import { ListComponent } from './observable-list/list/list.component';
import { MapAndFilterComponent } from './observable-list/map-and-filter/map-and-filter.component';
import { ObservableListComponent } from './observable-list/observable-list.component';
import { OfAndFromComponent } from './observable-list/of-and-from/of-and-from.component';
import { SubjectAndBehaviourSubjectComponent } from './observable-list/subject-and-behaviour-subject/subject-and-behaviour-subject.component';
import { ToArrayComponent } from './observable-list/to-array/to-array.component';


const routes: Routes = [
  {
    path:'',
    component:ObservableListComponent,
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path:'fromEvent',
        component:FromEventComponent
      },
      {
        path:'interval',
        component:IntervalComponent
      },
      {
        path:'of-and-from',
        component:OfAndFromComponent
      },
      {
        path:'to-array',
        component:ToArrayComponent
      },
      {
        path:'custom-observable',
        component:CustomObservableComponent
      },
      {
        path:'map-and-filter',
        component:MapAndFilterComponent
      },
      {
        path:'debounce-time-and-distinct-until-changed',
        component:DebounceTimeAndDistinctUntilChangedComponent
      },
      {
        path:'subject-and-behaviour-subject',
        component:SubjectAndBehaviourSubjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

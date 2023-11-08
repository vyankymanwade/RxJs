import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableListComponent } from './observable-list/observable-list.component';
import { FromEventComponent } from './observable-list/from-event/from-event.component';
import { ListComponent } from './observable-list/list/list.component';
import { IntervalComponent } from './observable-list/interval/interval.component';
import { OfAndFromComponent } from './observable-list/of-and-from/of-and-from.component';
import { ToArrayComponent } from './observable-list/to-array/to-array.component';
import { CustomObservableComponent } from './observable-list/custom-observable/custom-observable.component';
import { MapAndFilterComponent } from './observable-list/map-and-filter/map-and-filter.component';
import { DebounceTimeAndDistinctUntilChangedComponent } from './observable-list/debounce-time-and-distinct-until-changed/debounce-time-and-distinct-until-changed.component';
import { SubjectAndBehaviourSubjectComponent } from './observable-list/subject-and-behaviour-subject/subject-and-behaviour-subject.component';
import { Comp1Component } from './observable-list/subject-and-behaviour-subject/comp1/comp1.component';
import { Comp2Component } from './observable-list/subject-and-behaviour-subject/comp2/comp2.component';
import { Comp3Component } from './observable-list/subject-and-behaviour-subject/comp3/comp3.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ObservableListComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfAndFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapAndFilterComponent,
    DebounceTimeAndDistinctUntilChangedComponent,
    SubjectAndBehaviourSubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

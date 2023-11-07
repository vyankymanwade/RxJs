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
import { RetryComponent } from './observable-list/retry/retry.component';


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
    RetryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

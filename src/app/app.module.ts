import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableListComponent } from './observable-list/observable-list.component';
import { FromEventComponent } from './observable-list/from-event/from-event.component';
import { ListComponent } from './observable-list/list/list.component';
import { IntervalComponent } from './observable-list/interval/interval.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservableListComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,

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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FromEventComponent } from './observable-list/from-event/from-event.component';
import { IntervalComponent } from './observable-list/interval/interval.component';
import { ListComponent } from './observable-list/list/list.component';
import { ObservableListComponent } from './observable-list/observable-list.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

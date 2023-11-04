import { Location } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrls: ['./observable-list.component.css']
})
export class ObservableListComponent {

    constructor(private location:Location){

    }

    onBack(){
      this.location.back();
    }
}

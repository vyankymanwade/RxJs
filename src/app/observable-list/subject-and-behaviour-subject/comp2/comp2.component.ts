import { Component, OnInit } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{
  userName!:string ;

  constructor(private commonService:CommonService){}

  onClick(){
    this.commonService.userName.next(this.userName);
  }

  ngOnInit(): void {
    this.commonService.userName.subscribe((data) => {
      this.userName = data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit{

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

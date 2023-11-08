import { Component, OnInit } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit{
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

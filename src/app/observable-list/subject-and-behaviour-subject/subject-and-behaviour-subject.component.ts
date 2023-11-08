import { Component, OnInit } from '@angular/core';
import { CommonService } from './commonService/common.service';

@Component({
  selector: 'app-subject-and-behaviour-subject',
  templateUrl: './subject-and-behaviour-subject.component.html',
  styleUrls: ['./subject-and-behaviour-subject.component.css']
})
export class SubjectAndBehaviourSubjectComponent implements OnInit{

  name!:string;

  constructor(private commonService:CommonService) {
    
  }

  ngOnInit(): void {
      this.commonService.userName.subscribe((data) => {
        this.name = data;
      })
  }
}

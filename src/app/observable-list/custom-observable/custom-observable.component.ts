import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit{

  ngOnInit(): void {
      this.createCustomObservable1();
      this.createCustomObservable2();
      this.createCustomObservable3();
  }

  observerStatus1:string = '';
  observerStatus2:string = '';
  observerStatus3:string = '';


  list1:string[] = [];
  list2:string[] = [];
  list3:string[] = [];

  createCustomObservable1(){
    const observable1 = new Observable<string>((observer) =>{
      observer.next('HTML');
      observer.next('CSS');
      observer.next('JAVASCRIPT');
      observer.next('ANGULAR');
    })

    observable1.subscribe((resolve:string) =>{
      this.list1.push(resolve);
      this.observerStatus1 = '';
    },(error) => {
      this.observerStatus1 = 'error';
    },() => {
      this.observerStatus1 = 'completed';
    })
  }

  createCustomObservable2(){
    const observable1 = new Observable<string>((observer) =>{
      observer.next('HTML');
      observer.next('CSS');
      observer.next('JAVASCRIPT');
      observer.error('Something went wrong');
      observer.next('ANGULAR');
    })

    observable1.subscribe((resolve:string) =>{
      this.list2.push(resolve);
    },(error) => {
      this.observerStatus2 = 'error';
    },() => {
      this.observerStatus2 = 'completed';
    })
  }

  createCustomObservable3(){
    const observable1 = new Observable<string>((observer) =>{
      observer.next('HTML');
      observer.next('CSS');
      observer.next('JAVASCRIPT');
      observer.next('ANGULAR');
      observer.complete();
    })

    observable1.subscribe((resolve:string) =>{
      this.list3.push(resolve);
    },(error) => {
      this.observerStatus3 = 'error';
    },() =>{
      this.observerStatus3 = 'completed';
    })
  }

  getStatusClass(status:string){

    switch(status){
      case 'obStatus1':
        return this.observerStatus1;
      case 'obStatus2':
        return this.observerStatus2
      case 'obStatus3':
        return this.observerStatus3
      default:
        return ''
    }
  }
}

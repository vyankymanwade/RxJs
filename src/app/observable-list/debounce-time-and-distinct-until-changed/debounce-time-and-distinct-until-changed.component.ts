import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, from, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-debounce-time-and-distinct-until-changed',
  templateUrl: './debounce-time-and-distinct-until-changed.component.html',
  styleUrls: ['./debounce-time-and-distinct-until-changed.component.css']
})
export class DebounceTimeAndDistinctUntilChangedComponent implements AfterViewInit{

  @ViewChild('search') search !: ElementRef;
  searchedText:string = '';

  @ViewChild('search1') search1 !: ElementRef;
  searchedText1:string = '';

  constructor(){

  }


  ngAfterViewInit(): void {
      const searchOb= fromEvent(this.search.nativeElement,'input')
                      .pipe(debounceTime(100))

      searchOb.subscribe((data:any) => {
        this.searchedText = data.target.value;
      })


      const searchOb1= fromEvent(this.search1.nativeElement,'input')
      .pipe(debounceTime(500),distinctUntilChanged())

      searchOb1.subscribe((data:any) => {
        this.searchedText1 = data.target.value;
      })

  }
}

import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { Person } from 'src/app/Models/personModel';


@Component({
  selector: 'app-map-and-filter',
  templateUrl: './map-and-filter.component.html',
  styleUrls: ['./map-and-filter.component.css']
})
export class MapAndFilterComponent implements OnInit{
  listOfStudents:Person[] = [
    {
      name:'Ganesh',
      age:22,
      gender:'male'
    },
    {
      name:'Vyankatesh',
      age:22,
      gender:'male'
    },
    {
      name:'Anuradha',
      age:24,
      gender:'female'
    },
    {
      name:'Pooenam',
      age:22,
      gender:'female'
    },
    {
      name:'Rekha',
      age:22,
      gender:'female'
    },
    {
      name:'Riya',
      age:22,
      gender:'female'
    }
  ];

  updatedData:Person[] = [];

  ngOnInit(): void {
      const ob = from(this.listOfStudents)
      .pipe(filter((data) => data.gender === 'female'),
        (map((data) => {
          return {name:data.name,gender:data.gender}
        }))
      )
      .subscribe((data:Person) => {
        this.updatedData.push(data);
      })
  }

}

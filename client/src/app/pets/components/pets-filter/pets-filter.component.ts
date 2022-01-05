import { Component, OnInit } from '@angular/core';

interface IAnimalInfo {
	gender: string
	breed: string
  age: Number
  curator:string
}

@Component({
  selector: 'app-pets-filter',
  templateUrl: './pets-filter.component.html',
  styleUrls: ['./pets-filter.component.scss']
})
export class PetsFilterComponent implements OnInit {

  gender: string
	breed: string
  age: string
  curator:string
  constructor() {
    
   }

  ngOnInit(): void {
  }
  onSubmite() {
    
    console.log(this.breed)
    console.log(this.gender)
    console.log(this.age)
    console.log(this.curator)
    this.breed = '';
    this.age = '';
    this.curator = '';
    this.gender = '';
  }

}

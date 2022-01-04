import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home-donate',
  templateUrl: './home-donate.component.html',
  styleUrls: ['./home-donate.component.scss']
})
export class HomeDonateComponent implements OnInit {
  amount: any;

 
  constructor() { }
  ngOnInit(): void {
  }
  addValue(value:number) {
    this.amount = value;
  }
 
  onClickSubmit() {
    alert(`Thank you for the Donate in ${this.amount} points`)
    this.amount = '';
  }
}

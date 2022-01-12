import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volonteers-list',
  templateUrl: './volonteers-list.component.html',
  styleUrls: ['./volonteers-list.component.scss']
})
export class VolonteersListComponent implements OnInit {
  title = 'Volonteers List'
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list-page',
  templateUrl: './animal-list-page.component.html',
  styleUrls: ['./animal-list-page.component.scss']
})
export class AnimalListPageComponent implements OnInit {
  title = 'animal list page'
  constructor() { }

  ngOnInit(): void {
  }

}

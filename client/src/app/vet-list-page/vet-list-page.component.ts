import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-list-page',
  templateUrl: './vet-list-page.component.html',
  styleUrls: ['./vet-list-page.component.scss']
})
export class VetListPageComponent implements OnInit {
  title = 'Vet List'
  constructor() { }

  ngOnInit(): void {
  }

}

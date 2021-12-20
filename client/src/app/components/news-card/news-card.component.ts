import { Component, Input, OnInit } from '@angular/core';
import { INewsCardInput } from 'src/app/interfaces/common';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() item: INewsCardInput;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }
}

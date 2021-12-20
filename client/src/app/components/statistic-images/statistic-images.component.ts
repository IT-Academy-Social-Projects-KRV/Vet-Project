import { Component, Input, OnInit } from '@angular/core';
import { IStatisticImage } from 'src/app/interfaces/common';

@Component({
  selector: 'app-statistic-images',
  templateUrl: './statistic-images.component.html',
  styleUrls: ['./statistic-images.component.scss']
})
export class StatisticImagesComponent implements OnInit {
  @Input() item: IStatisticImage;
  
  constructor() { }

  ngOnInit(): void {
  }

}

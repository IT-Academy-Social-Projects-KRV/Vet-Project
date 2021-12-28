import { Component, OnInit } from '@angular/core';
import { AnimalInfoService } from '../../shared/animal-info.service';

@Component({
  selector: 'app-animal-list-card',
  templateUrl: './animal-list-card.component.html',
  styleUrls: ['./animal-list-card.component.scss'],
})
export class AnimalListCardComponent implements OnInit {
  animalsInfo: any = [];

  constructor(private animalInfo: AnimalInfoService) {
    this.animalInfo.getAnimalsInfo().subscribe((item) => {
      console.log(item);
      this.animalsInfo = item;
    });
  }

  ngOnInit(): void {}
}

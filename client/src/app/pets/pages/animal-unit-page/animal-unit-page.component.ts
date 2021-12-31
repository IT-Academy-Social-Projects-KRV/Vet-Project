import { Component, OnInit } from '@angular/core';
import { AnimalInfoService } from '../../../shared/services/animal-info.service';

@Component({
  selector: 'app-animal-unit-page',
  templateUrl: './animal-unit-page.component.html',
  styleUrls: ['./animal-unit-page.component.scss']
})
export class AnimalUnitPageComponent implements OnInit {
  animalsInfo: any = [];

  constructor(private animalInfo: AnimalInfoService) {
    this.animalInfo.getAnimalsInfo().subscribe((item) => {
      console.log(item);
      this.animalsInfo = item;
    });
  }
  ngOnInit(): void {
  }

}

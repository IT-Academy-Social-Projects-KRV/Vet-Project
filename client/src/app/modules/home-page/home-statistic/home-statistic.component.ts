import { Component, OnInit } from '@angular/core';
import { IStatisticImage } from 'src/app/interfaces/common';

@Component({
  selector: 'app-home-statistic',
  templateUrl: './home-statistic.component.html',
  styleUrls: ['./home-statistic.component.scss']
})
export class HomeStatisticComponent implements OnInit {
  statisticItem: IStatisticImage[] = [
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/2040/0303/products/Cute_Veterinary_Clinic_Pet_Shop_Cartoon_Logo_Icon_15_622806958_1024x1024@2x.jpg?v=1505505209'
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/2040/0303/products/Cute_Veterinary_Clinic_Pet_Shop_Cartoon_Logo_Icon_15_622806958_1024x1024@2x.jpg?v=1505505209'
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/2040/0303/products/Cute_Veterinary_Clinic_Pet_Shop_Cartoon_Logo_Icon_15_622806958_1024x1024@2x.jpg?v=1505505209'
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/2040/0303/products/Cute_Veterinary_Clinic_Pet_Shop_Cartoon_Logo_Icon_15_622806958_1024x1024@2x.jpg?v=1505505209'
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}

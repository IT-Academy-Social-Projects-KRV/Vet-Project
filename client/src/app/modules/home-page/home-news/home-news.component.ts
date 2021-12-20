import { Component, OnInit } from '@angular/core';
import { INewsCardInput } from 'src/app/interfaces/common';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {
  newsItems: INewsCardInput[] = [
    {
      title: 'News 1',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit praesentium fugiat, soluta laborum nostrumeius laudantium, sed sint ut facilis sequi repellendus eaque aliquid molestiae deleniti possimus eos odio?'
    },
    {
      title: 'News 2',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit praesentium fugiat, soluta laborum nostrumeius laudantium, sed sint ut facilis sequi repellendus eaque aliquid molestiae deleniti possimus eos odio?'
    },
    {
      title: 'News 3',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit praesentium fugiat, soluta laborum nostrumeius laudantium, sed sint ut facilis sequi repellendus eaque aliquid molestiae deleniti possimus eos odio?'
    },

  ]
  constructor() { }


  ngOnInit(): void {
  }

}

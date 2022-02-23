// /* eslint-disable no-unused-vars */
// import { Component, OnInit } from '@angular/core'
// import { HttpClient } from '@angular/common/http'

// @Component({
// 	selector: 'app-home-news',
// 	templateUrl: './home-news.component.html',
// 	styleUrls: ['./home-news.component.scss']
// })
// export class HomeNewsComponent implements OnInit {
// 	newsResponse: any = []
// 	newsList: any = []
// 	pageNews: number = 1

// 	constructor(private http: HttpClient) {}

// 	ngOnInit(): void {
// 		this.getNewNewsList()
// 	}

// 	nextPage(): void {
// 		this.pageNews += 1
// 		this.getNewNewsList()
// 	}

// 	previosPage(): void {
// 		this.pageNews -= 1
// 		this.getNewNewsList()
// 	}

// 	getNewNewsList(): void {
// 		this.http
// 			.get(
// 				`https://newsapi.org/v2/everything?q=cat&apiKey=a727cf33cbca4135914838376fe65461&pageSize=3&page=${this.pageNews}`
// 			)
// 			.subscribe(response => {
// 				this.newsResponse = response
// 				this.newsList = this.newsResponse.articles
// 			})
// 	}
// }

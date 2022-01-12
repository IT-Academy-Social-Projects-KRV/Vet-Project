import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-home-news',
	templateUrl: './home-news.component.html',
	styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {
	newsResponse: any = [];
	newsList: any = [];
	page: any = 0;
	timerId:any;
	
	constructor(private http: HttpClient) { 
		
	}

	addNewPage() {
		this.page += 1;
		this.getNewNewsList()

	}

	getNewNewsList() {
		this.http.get(`https://newsapi.org/v2/everything?q=dog&apiKey=a727cf33cbca4135914838376fe65461&pageSize=3`).subscribe((response) => {
			this.newsResponse = response;
			this.newsList = this.newsResponse.articles
			console.log(this.newsList)
     })
	}

	ngOnInit(): void {
		this.addNewPage()
	}
}

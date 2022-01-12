import { Component, Input, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
 response: any;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {}
}

import { Component, Input } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
	response: any

	constructor(private http: HttpClient) {}
}

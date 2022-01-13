import { Component, Input } from '@angular/core'
import { INewsCardInput } from 'src/app/shared/interfaces/common'

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
	@Input() item: INewsCardInput

	constructor() {}
}

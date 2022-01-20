import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-filter-result',
	templateUrl: './filter-result.component.html',
	styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent {
	@Input() data: {
		id?: number
		name?: string
		gender?: string
		breed?: string
		age?: number
		curator?: string
	}
}

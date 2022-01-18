import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-filter-result',
	templateUrl: './filter-result.component.html',
	styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent {
	@Input() data: {
		id: string
		name: string
		gender: string
		breed: string
		age: string
		curator: string
	}
}

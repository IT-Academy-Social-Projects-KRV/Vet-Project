import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-vets-filter-result',
	templateUrl: './vets-filter-result.component.html',
	styleUrls: ['./vets-filter-result.component.scss']
})
export class VetsFilterResultComponent {
	@Input() data: {
		id?: number
		title?: string
		adress?: string
		phone?: string
		email?: string
		map_link?: string
		animal_type?: string
	}
}

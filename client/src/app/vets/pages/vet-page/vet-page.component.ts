import { Component } from '@angular/core'

@Component({
	selector: 'app-vet-page',
	templateUrl: './vet-page.component.html',
	styleUrls: ['./vet-page.component.scss']
})
export class VetPageComponent {
	constructor() {}

	condition = false

	onFilterIsPress() {
		this.condition = true
		console.log(this.condition)
	}
}

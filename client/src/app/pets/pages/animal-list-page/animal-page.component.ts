import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-animal-list-page',
	templateUrl: './animal-page.component.html',
	styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent implements OnInit {
	title = 'animal list page'
	constructor() {}

	ngOnInit(): void {}
}

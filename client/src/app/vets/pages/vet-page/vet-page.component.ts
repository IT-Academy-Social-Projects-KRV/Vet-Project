import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-vet-page',
	templateUrl: './vet-page.component.html',
	styleUrls: ['./vet-page.component.scss']
})
export class VetPageComponent implements OnInit {
	title = 'Vet List'
	constructor() {}

	ngOnInit(): void {}
}

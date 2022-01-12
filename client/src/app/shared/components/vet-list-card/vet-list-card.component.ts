import { Component, OnInit, Input } from '@angular/core'
import { IVetsInfo } from '@shared/interfaces/vetInfo'

@Component({
	selector: 'app-vet-list-card',
	templateUrl: './vet-list-card.component.html',
	styleUrls: ['./vet-list-card.component.scss', '../page-layout/header/header.component.scss']
})
export class VetListCardComponent implements OnInit {
	@Input()
	vetsInfo: IVetsInfo

	constructor() {}
	ngOnInit(): void {}
}

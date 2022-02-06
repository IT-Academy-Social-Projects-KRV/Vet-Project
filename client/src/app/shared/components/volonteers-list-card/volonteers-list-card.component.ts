import { Component, Input } from '@angular/core'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'

@Component({
	selector: 'app-volonteers-list-card',
	templateUrl: './volonteers-list-card.component.html',
	styleUrls: ['./volonteers-list-card.component.scss']
})
export class VolonteersListCardComponent {
	@Input()
	volonteersInfo: IVolonteersInfo

	constructor() {}
}

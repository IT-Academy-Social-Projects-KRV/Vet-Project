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

	photos: [
		{
			url: 'https://gdb.rferl.org/0201428D-208D-4141-86B8-73C89AF68BD0.jpg'
		}
	]

	constructor() {}
}

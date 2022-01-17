/* eslint-disable no-unused-vars */
import { Component } from '@angular/core'
import { AnimalUnitInfoService } from 'src/app/shared/services/animal-unit-info.service'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-animal-unit-page',
	templateUrl: './animal-unit-page.component.html',
	styleUrls: ['./animal-unit-page.component.scss']
})
export class AnimalUnitPageComponent {
	petsInfo: any = []
	id: string

	constructor(private animalInfo: AnimalUnitInfoService, private _Activatedroute: ActivatedRoute) {
		this._Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
		this.animalInfo.getAnimalsUnitInfo(this.id).subscribe(item => {
			this.petsInfo = item
		})
	}
}

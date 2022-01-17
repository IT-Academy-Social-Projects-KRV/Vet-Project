/* eslint-disable no-unused-vars */
import { Component } from '@angular/core'
import { AnimalInfoService } from '@shared/services/animal-info.service'

@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {
	animalsInfo: any = []

	constructor(private animalInfo: AnimalInfoService) {
		this.animalInfo.getAnimalsInfo().subscribe(item => {
			this.animalsInfo = item
		})
	}
}

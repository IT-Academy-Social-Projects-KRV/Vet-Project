import { Component } from '@angular/core'
import { AnimalInfoService } from '@shared/services/animal-info.service'

@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {
	animalsInfo: any = []
	// eslint-disable-next-line no-unused-vars
	constructor(private animalInfo: AnimalInfoService) {
		this.animalInfo.getAnimalsInfo().subscribe(item => {
			this.animalsInfo = item
		})
	}
}

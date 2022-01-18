import { Component } from '@angular/core'
import { AnimalInfoService } from '@shared/services/animal-info.service'
@Component({
	selector: 'app-pet-slider',
	templateUrl: './pet-slider.component.html',
	styleUrls: ['./pet-slider.component.scss']
})
export class PetSliderComponent {
	animalsInfo: any = []
	constructor(private animalInfo: AnimalInfoService) {
		this.animalInfo.getAnimalsInfo().subscribe(item => {
			this.animalsInfo = item
		})
	}
}

import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AnimalInfoService } from '@shared/services/animal-info.service'

@Component({
	selector: 'app-pet-slider',
	templateUrl: './pet-slider.component.html',
	styleUrls: ['./pet-slider.component.scss']
})
export class PetSliderComponent implements OnInit {
	animalsInfo: any = []
	constructor(private animalInfo: AnimalInfoService) {
		this.animalInfo.getAnimalsInfo().subscribe(item => {
			this.animalsInfo = item
		})
	}

	ngOnInit(): void {}
}

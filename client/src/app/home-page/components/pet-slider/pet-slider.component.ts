/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'
@Component({
	selector: 'app-pet-slider',
	templateUrl: './pet-slider.component.html',
	styleUrls: ['./pet-slider.component.scss']
})
export class PetSliderComponent implements OnInit {
	animalsInfo$: Observable<any>
	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.animalsInfo$ = this.apiServices.getAnimalsInfo()
	}
}

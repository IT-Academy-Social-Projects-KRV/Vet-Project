/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core'

import { Observable, map } from 'rxjs'

import { IAnimalInfo } from 'src/app/shared/interfaces/animals-filter-info'

import { ApiServices } from '../../../shared/services/api.service'
import { IAnimalsInfo } from '@shared/interfaces/animals'

@Component({
	selector: 'app-pets-filter',
	templateUrl: './pets-filter.component.html',
	styleUrls: ['./pets-filter.component.scss']
})
export class PetsFilterComponent implements OnInit {
	petsInfo$: Observable<IAnimalsInfo[]>
	animalFilterInfo$: Observable<IAnimalsInfo[]>

	animal: IAnimalInfo = {
		gender: '',
		breed: '',
		age: '',
		curator: ''
	}
	paramsArr = []

	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.petsInfo$ = this.apiServices.getAnimalsInfo()
	}

	onSubmite() {
		this.paramsArr = []
		this.checkParams()
		let getUrl = this.paramsArr.join('&')
		this.getAnimalsInfo(getUrl)
	}

	checkParams() {
		if (this.animal.gender !== '') {
			this.paramsArr.push(`gender=${this.animal.gender}`)
		}
		if (this.animal.breed !== '') {
			this.paramsArr.push(`breed=${this.animal.breed}`)
		}
		if (this.animal.age !== '') {
			this.paramsArr.push(`age=${this.animal.age}`)
		}
		if (this.animal.curator !== '') {
			this.paramsArr.push(`curator=${this.animal.curator}`)
		}
	}

	getAnimalsInfo(url) {
		this.animalFilterInfo$ = this.apiServices.getAnimalsFilterInfo(url)
	}
}

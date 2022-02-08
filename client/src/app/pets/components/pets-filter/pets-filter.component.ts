/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { IAnimalInfo } from 'src/app/shared/interfaces/animals-filter-info'

import { ApiServices } from '../../../shared/services/api.service'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { NotifierService } from '@shared/services/notifier.service'

@Component({
	selector: 'app-pets-filter',
	templateUrl: './pets-filter.component.html',
	styleUrls: ['./pets-filter.component.scss']
})
export class PetsFilterComponent implements OnInit {
	public petsInfo$: Observable<IAnimalsInfo[]>
	public animalFilterInfo$: Observable<IAnimalsInfo[]>

	public animal: IAnimalInfo = {
		gender: '',
		breed: '',
		age: '',
		curator: ''
	}
	paramsArr = []

	constructor(private apiServices: ApiServices, private notifierService: NotifierService) {}

	ngOnInit(): void {
		this.petsInfo$ = this.apiServices.getAnimalsInfo()
	}

	onSubmite(): void {
		this.paramsArr = []
		this.checkParams()
		let getUrl = this.paramsArr.join('&')
		this.getAnimalsInfo(getUrl)
	}

	checkParams(): void {
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

	getAnimalsInfo(url): void {
		this.animalFilterInfo$ = this.apiServices.getAnimalsFilterInfo(url)

		this.apiServices.getAnimalsFilterInfo(url).subscribe(item => {
			if (item.length == 0) {
				this.notifierService.showInfoNotification(
					'З такими параметрами, нажаль, нічого немає =(',
					'Ok'
				)
			} else {
				this.notifierService.showSuccessNotification(
					`Ми знайшли для Вас ${item.length} тварин =)`,
					'Ok'
				)
			}
		})
	}
}

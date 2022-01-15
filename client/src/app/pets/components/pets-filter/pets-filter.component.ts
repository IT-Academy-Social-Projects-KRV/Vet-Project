import { Component } from '@angular/core'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { HttpClient } from '@angular/common/http'
import { AnimalInfoService } from 'src/app/shared/services/animal-info.service'

interface IAnimalInfo {
	gender: string
	breed: string
	age: string
	curator: string
}

@Component({
	selector: 'app-pets-filter',
	templateUrl: './pets-filter.component.html',
	styleUrls: ['./pets-filter.component.scss']
})
export class PetsFilterComponent {
	response: any
	animalsInfoArray: any
	lengthOfnimalsInfoArray: number
	petsInfo: any = []
	active: boolean = false

	baseUrl: string = 'http://localhost:3200/api//animals/filter//?'
	paramsArr = []
	getUrl = ''

	animal: IAnimalInfo = {
		gender: '',
		breed: '',
		age: '',
		curator: ''
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

	constructor(private http: HttpClient, private animalInfo: AnimalInfoService) {
		this.animalInfo.getAnimalsInfo().subscribe(item => {
			this.petsInfo = item
		})
	}

	onSubmite() {
		this.paramsArr = []
		this.checkParams()
		this.getUrl = this.paramsArr.join('&')

		this.getAnimalsInfo(this.getUrl)
	}

	getAnimalsInfo(url) {
		this.http.get(`${this.baseUrl}${url}`).subscribe(response => {
			this.animalsInfoArray = response
			this.response = response
			console.log(response)
			this.active = true

			this.lengthOfnimalsInfoArray = this.animalsInfoArray.length
			if (this.lengthOfnimalsInfoArray !== 0) {
				Notify.success(`Greate! We find ${this.lengthOfnimalsInfoArray} animals`)
			} else {
				Notify.failure('Sorry, we do not have animal like you want(((')
			}
		})
		console.log(`${this.baseUrl}${url}`)
	}
}

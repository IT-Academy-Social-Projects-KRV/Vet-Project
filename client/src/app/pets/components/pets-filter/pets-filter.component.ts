import { Component } from '@angular/core'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

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
	animal: IAnimalInfo = {
		gender: '',
		breed: '',
		age: '',
		curator: ''
	}

	constructor() {}

	onSubmite() {
		Notify.success(`Great! We find ?? animals!!`)
	}
}

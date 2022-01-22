import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-admin-edit-pet',
	templateUrl: './admin-edit-pet.component.html',
	styleUrls: ['./admin-edit-pet.component.scss']
})
export class AdminEditPetComponent {
	item: IAnimalsUnitInfo
	curators: any[] = ['Куратор 1', 'Куратор 2']
	constructor(private apiServices: ApiServices) {}
	onSubmit(form: IAnimalsUnitInfo): void {
		this.item = {
			name: form.name,
			shelterName: form.shelterName,
			curator: form.curator,
			gender: form.gender,
			breed: form.breed,
			age: form.age,
			shortInfo: form.shortInfo,
			behavioralFeatures: form.behavioralFeatures,
			wishesForShelter: form.wishesForShelter
		}

		this.apiServices.postNewAnimal(this.item)
	}
	onCreateAnimal(): void {}
}

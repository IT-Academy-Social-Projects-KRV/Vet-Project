import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'
interface Animal {
	name: string
}
interface Specialization {
	name: string
}

@Component({
	selector: 'app-admin-edit-vet',
	templateUrl: './admin-edit-vet.component.html',
	styleUrls: ['./admin-edit-vet.component.scss']
})
export class AdminEditVetComponent {
	typesOfShoes: string[] = [
		'Хірургія',
		'Травматологія',
		'Вакцинування',
		'Офтмальмолог',
		'Стерилізація'
	]

	animalControl = new FormControl('', Validators.required)
	selectFormControl = new FormControl('', Validators.required)
	animals: Animal[] = [
		{ name: 'Коти' },
		{ name: 'Собаки' },
		{ name: 'Гризуни' },
		{ name: 'Рептилії' },
		{ name: 'Птахи' }
	]
	vetSpecialization = new FormControl('', Validators.required)
	selectSpecializationControl = new FormControl('', Validators.required)
	specialization: Specialization[] = [
		{ name: 'Хірургія' },
		{ name: 'Травматологія' },
		{ name: 'Вакцинування' },
		{ name: 'Офтмальмолог' },
		{ name: 'Стерилізація' }
	]

	constructor(private apiServices: ApiServices) {}

	onCreateClinic(): void {
		// Send Http request
		this.apiServices.postNewClinic('New clinic from admin', '777', '333', 'fgdje', 'fgsdf4')
	}
}

import { Component, OnInit } from '@angular/core'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-pet-add-dialog',
	templateUrl: './pet-add-dialog.component.html',
	styleUrls: ['./pet-add-dialog.component.scss']
})
export class PetAddDialogComponent implements OnInit {
	constructor(private apiServices: ApiServices) {}
	item: IAnimalsUnitInfo
	curators: any[] = ['Куратор 1', 'Куратор 2']
	onCreateAnimal(form: IAnimalsUnitInfo): void {
		this.item = {
			name: form.name,
			shelter_name: form.shelter_name,
			curator: form.curator,
			gender: form.gender,
			breed: form.breed,
			age: form.age,
			short_info: form.short_info,
			behavioral_features: form.behavioral_features,
			wishes_for_shelter: form.wishes_for_shelter
		}

		this.apiServices.postNewAnimal(this.item).subscribe()
	}

	ngOnInit(): void {}
}

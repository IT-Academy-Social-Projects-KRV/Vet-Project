import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'

@Component({
	selector: 'app-admin-edit-vet',
	templateUrl: './admin-edit-vet.component.html',
	styleUrls: ['./admin-edit-vet.component.scss']
})
export class AdminEditVetComponent {
	selectFormControl = new FormControl('', Validators.required)

	constructor(private apiServices: ApiServices) {}
	item: IVetsUnitInfo

	onCreateClinic(form): void {
		this.item = {
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}
		// Send Http request
		this.apiServices.postNewClinic(this.item)
	}
}

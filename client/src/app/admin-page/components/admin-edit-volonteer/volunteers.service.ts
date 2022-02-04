import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'
import { DialogService } from './dialog.service'

@Injectable({
	providedIn: 'root'
})
export class VolunteersService {
	constructor(public apiService: ApiServices) {}
	volunteersList: any = []

	form: FormGroup = new FormGroup({
		id: new FormControl(null),
		first_name: new FormControl('', [
			Validators.required,
			Validators.pattern("^[а-яА-я / і / ґ / ї / І / Ї/ Ґ']+")
		]),
		last_name: new FormControl('', [
			Validators.required,
			Validators.pattern("^[а-яА-я / і / ґ / ї / І / Ї/ Ґ']+")
		]),
		email: new FormControl('', Validators.email),
		number: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{10,}')])
	})
	initializeFormGroup() {
		this.form.setValue({
			id: null,
			first_name: '',
			last_name: '',
			email: '',
			number: ''
		})
	}
	insertVolunteer(volunteer) {
		console.log(volunteer)
		this.volunteersList.push({
			first_name: volunteer.first_name,
			last_name: volunteer.last_name,
			email: volunteer.email,
			number: volunteer.number
		})
		console.log('vol list' + this.volunteersList)
	}
	updateVolunteer(volunteer: any): void {
		console.log(volunteer)
		this.apiService.putEditVolunteer(volunteer).subscribe()
	}
	populateForm(volunteer) {
		this.form.setValue(volunteer)
	}
	deleteVolunteer(id: string) {
		this.apiService.deleteVolunteer(id).subscribe()
	}
}

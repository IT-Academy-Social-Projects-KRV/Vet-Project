import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'

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
		image: new FormControl(''),
		number: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{10,17}')])
	})
	initializeFormGroup() {
		this.form.setValue({
			id: null,
			first_name: '',
			last_name: '',
			email: '',
			number: '',
			image: ''
		})
	}
	updateVolunteer(volunteer: any) {
		return this.apiService.putEditVolunteer(volunteer)
	}
	populateForm(volunteer) {
		this.form.setValue(volunteer)
	}
	deleteVolunteer(id: string) {
		this.apiService.deleteVolunteer(id).subscribe()
	}
}

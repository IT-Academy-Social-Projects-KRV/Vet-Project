import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
	providedIn: 'root'
})
export class VolunteersService {
	constructor() {}

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
}

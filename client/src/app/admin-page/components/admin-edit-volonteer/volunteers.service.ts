import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
	providedIn: 'root'
})
export class VolunteersService {
	constructor() {}

	form: FormGroup = new FormGroup({
		$key: new FormControl(null),
		firstName: new FormControl('', [Validators.required, Validators.pattern("^[а-яА-я']+")]),
		secondName: new FormControl('', [Validators.required, Validators.pattern("^[а-яА-я ']+")]),
		email: new FormControl('', Validators.email),
		number: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{10,}')])
	})
	initializeFormGroup() {
		this.form.setValue({
			$key: null,
			firstName: '',
			secondName: '',
			email: '',
			number: ''
		})
	}
}

import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
	providedIn: 'root'
})
export class VolunteersService {
	constructor() {}

	form: FormGroup = new FormGroup({
		$key: new FormControl(null),
		firstName: new FormControl('', Validators.required),
		secondName: new FormControl('', Validators.required),
		email: new FormControl('', Validators.email),
		number: new FormControl('', [Validators.required, Validators.minLength(10)])
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

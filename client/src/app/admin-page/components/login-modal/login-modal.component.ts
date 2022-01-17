import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
	email = new FormControl('', [Validators.required, Validators.email])
	hide: boolean = true
	getErrorMessage() {
		if (this.email.hasError('required')) {
			return 'You must enter a value'
		}

		return this.email.hasError('email') ? 'Not a valid email' : ''
	}
}
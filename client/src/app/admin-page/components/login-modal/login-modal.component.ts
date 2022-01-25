import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiServices } from '@shared/services/api.service'
import { Subscription } from 'rxjs'

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {
	hide: boolean = true
	loginForm: FormGroup
	aSUb: Subscription
	constructor(private login: ApiServices, private router: Router) {}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			password: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email])
		})
	}

	ngOnDestroy(): void {
		if (this.aSUb) {
			this.aSUb.unsubscribe
		}
	}
	onSubmit() {
		this.loginForm.disable()
		const user = {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}
		this.aSUb = this.login.login(user).subscribe({
			next: () => this.router.navigate(['/admin/dashboard']),
			error: error => {
				console.warn(error)
				this.loginForm.enable()
			}
		})
	}
}

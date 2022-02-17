import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { ApiServices } from '@shared/services/api.service'
import { NotifierService } from '@shared/services/notifier.service'
import { Subscription } from 'rxjs'
import { ErrorHttpInterseptor } from '../../error-http-interseptor'
import { LoginService } from './login.service'

@Component({
	selector: 'app-auth',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
	hide = true
	loginForm: FormGroup
	aSUb: Subscription
	constructor(
		private loginService: ApiServices,
		private router: Router,
		private notifierService: NotifierService
	) {}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			password: new FormControl('', [Validators.required, Validators.minLength(5)]),
			email: new FormControl('', [Validators.required, Validators.email])
		})
	}
	ngOnDestroy(): void {
		if (this.aSUb) {
			this.aSUb.unsubscribe()
		}
	}
	resetDialog(): void {
		this.loginForm.reset()
	}
	onSubmit(): void {
		const user = {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}

		this.aSUb = this.loginService.login(user).subscribe(item => {
			if (item) {
				this.router.navigate(['/admin'])
				this.notifierService.showSuccessNotification(`Вітаємо в особистому кабінеті`, 'Ok')
			}
		})
		setTimeout(() => this.loginForm.reset(), 500)
	}
}

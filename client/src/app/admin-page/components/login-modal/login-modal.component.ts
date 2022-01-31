/* eslint-disable no-empty */
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiServices } from '@shared/services/api.service'
import { Subscription } from 'rxjs'
import { MatDialogRef } from '@angular/material/dialog'
import { NotifierService } from 'src/app/notifier.service'

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {
	hide: boolean = true
	loginForm: FormGroup
	aSUb: Subscription

	constructor(
		private login: ApiServices,
		private router: Router,
		public dialogRef: MatDialogRef<LoginModalComponent>,
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
			this.aSUb.unsubscribe
		}
	}
	onSubmit() {
		const user = {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}

		this.aSUb = this.login.login(user).subscribe(item => {
			if (item) {
				this.dialogRef.close()
				this.router.navigate(['/admin'])
				this.notifierService.showSuccessNotification(`Вітаємо в особистому кабінеті`, 'Ok')
			}
		})

		setTimeout(() => this.loginForm.reset(), 350)
	}
}

import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiServices } from '@shared/services/api.service'
import { Subscription } from 'rxjs'
import { MatDialogRef } from '@angular/material/dialog'

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
		public dialogRef: MatDialogRef<LoginModalComponent>
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

		this.aSUb = this.login.login(user).subscribe(() => {
			if (this.login.isAuthenticated()) {
				this.dialogRef.close()
				this.dialogRef.afterClosed().subscribe(() => this.router.navigate(['/admin']))
			}
		})

		this.loginForm.reset()
	}
}

import { Overlay } from '@angular/cdk/overlay'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card'
import { MatDialogContent } from '@angular/material/dialog'
import { MatError, MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field'
import { MatIcon } from '@angular/material/icon'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

import { AuthComponent } from './login.component'

describe('AuthComponent', () => {
	let component: AuthComponent
	let fixture: ComponentFixture<AuthComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AuthComponent,
				MatCard,
				MatDialogContent,
				MatCardTitle,
				MatCardContent,
				MatLabel,
				MatIcon,
				MatCardActions,
				MatError
			],
			providers: [HttpClient, HttpHandler, MatSnackBar, Overlay, { provide: Router, useValue: {} }]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

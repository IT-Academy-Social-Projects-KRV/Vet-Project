import { Overlay } from '@angular/cdk/overlay'
import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import {
	MatCard,
	MatCardActions,
	MatCardContent,
	MatCardModule,
	MatCardTitle
} from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Router } from '@angular/router'

import { AuthComponent } from './login.component'

describe('AuthComponent', () => {
	let component: AuthComponent
	let fixture: ComponentFixture<AuthComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AuthComponent],
			providers: [{ provide: Router, useValue: {} }],
			imports: [
				HttpClientModule,
				MatSnackBarModule,
				MatCardModule,
				MatDialogModule,
				MatIconModule,
				MatFormFieldModule,
				MatInputModule,
				BrowserAnimationsModule,
				ReactiveFormsModule
			]
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

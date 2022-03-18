/* eslint-disable no-undef */

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatCard, MatCardActions } from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HomeDonateComponent } from './home-donate.component'

describe('HomeDonateComponent', () => {
	let component: HomeDonateComponent
	let fixture: ComponentFixture<HomeDonateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeDonateComponent, MatCard, MatCardActions],

			imports: [MatSnackBarModule, FormsModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeDonateComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

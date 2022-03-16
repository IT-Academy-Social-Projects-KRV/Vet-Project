/* eslint-disable no-undef */
import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCard, MatCardActions } from '@angular/material/card'
import { MatSnackBar } from '@angular/material/snack-bar'

import { HomeDonateComponent } from './home-donate.component'

describe('HomeDonateComponent', () => {
	let component: HomeDonateComponent
	let fixture: ComponentFixture<HomeDonateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeDonateComponent, MatCard, MatCardActions],
			providers: [MatSnackBar, Overlay]
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

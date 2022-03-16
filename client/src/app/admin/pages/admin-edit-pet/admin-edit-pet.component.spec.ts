import { Overlay } from '@angular/cdk/overlay'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

import { AdminEditPetComponent } from './admin-edit-pet.component'

describe('AdminEditPetComponent', () => {
	let component: AdminEditPetComponent
	let fixture: ComponentFixture<AdminEditPetComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminEditPetComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				Overlay,
				MatSnackBar,
				{ provide: MAT_DIALOG_SCROLL_STRATEGY, useValue: {} }
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminEditPetComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

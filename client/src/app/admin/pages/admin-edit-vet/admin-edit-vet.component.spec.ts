import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { AdminEditVetComponent } from './admin-edit-vet.component'
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('AdminEditVetComponent', () => {
	let component: AdminEditVetComponent
	let fixture: ComponentFixture<AdminEditVetComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminEditVetComponent],
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
		fixture = TestBed.createComponent(AdminEditVetComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

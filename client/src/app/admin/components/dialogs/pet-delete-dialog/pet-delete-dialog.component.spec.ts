import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
	MatDialog,
	MatDialogActions,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog'
import { PetDeleteDialogComponent } from './pet-delete-dialog.component'
import { HttpClient, HttpHandler } from '@angular/common/http'

describe('PetDeleteDialogComponent', () => {
	let component: PetDeleteDialogComponent
	let fixture: ComponentFixture<PetDeleteDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetDeleteDialogComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				MatDialogActions,
				{
					provide: MatDialogRef,
					useValue: {}
				},
				{
					provide: MAT_DIALOG_DATA,
					useValue: {}
				}
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetDeleteDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

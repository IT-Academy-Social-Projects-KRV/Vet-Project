import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { VetDeleteDialogComponent } from './vet-delete-dialog.component'

describe('VetDeleteDialogComponent', () => {
	let component: VetDeleteDialogComponent
	let fixture: ComponentFixture<VetDeleteDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetDeleteDialogComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				{
					provide: MatDialogRef,
					useValue: {}
				},
				{
					provide: MAT_DIALOG_DATA,
					useValue: {}
				}
			],
			imports: [MatDialogModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetDeleteDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

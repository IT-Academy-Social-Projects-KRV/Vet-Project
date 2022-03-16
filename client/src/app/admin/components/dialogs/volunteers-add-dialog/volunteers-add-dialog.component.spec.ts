import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { VolunteersAddDialogComponent } from './volunteers-add-dialog.component'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Overlay } from '@angular/cdk/overlay'

describe('VolunteersAddDialogComponent', () => {
	let component: VolunteersAddDialogComponent
	let fixture: ComponentFixture<VolunteersAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolunteersAddDialogComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				MatSnackBar,
				Overlay,
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
		fixture = TestBed.createComponent(VolunteersAddDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

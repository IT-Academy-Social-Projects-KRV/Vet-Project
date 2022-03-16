import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { VolunteersDeleteDialogComponent } from './volunteers-delete-dialog.component'
import { HttpClient, HttpHandler } from '@angular/common/http'

describe('VolunteersDeleteDialogComponent', () => {
	let component: VolunteersDeleteDialogComponent
	let fixture: ComponentFixture<VolunteersDeleteDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolunteersDeleteDialogComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				{
					provide: MatDialogRef,
					useValue: {}
				}
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VolunteersDeleteDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Overlay } from '@angular/cdk/overlay'
import { InjectionToken } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PetAddDialogComponent } from './pet-add-dialog.component'
import { HttpClient, HttpHandler } from '@angular/common/http'

describe('PetAddDialogComponent', () => {
	let component: PetAddDialogComponent
	let fixture: ComponentFixture<PetAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetAddDialogComponent],
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
				{ provide: InjectionToken, useValue: {} },
				{
					provide: MAT_DIALOG_DATA,
					useValue: {}
				}
			],
			imports: [FormsModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetAddDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

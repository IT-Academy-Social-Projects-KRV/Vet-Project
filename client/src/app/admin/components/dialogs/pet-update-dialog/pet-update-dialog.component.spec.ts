import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { PetUpdateDialogComponent } from './pet-update-dialog.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Overlay } from '@angular/cdk/overlay'
import { FormsModule } from '@angular/forms'

describe('PetUpdateDialogComponent', () => {
	let component: PetUpdateDialogComponent
	let fixture: ComponentFixture<PetUpdateDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetUpdateDialogComponent],
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
			],
			imports: [FormsModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetUpdateDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

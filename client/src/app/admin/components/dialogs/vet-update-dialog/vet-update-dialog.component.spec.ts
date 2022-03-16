import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { VetUpdateComponent } from './vet-update-dialog.component'
import {
	MatDialog,
	MatDialogActions,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Overlay } from '@angular/cdk/overlay'
import { FormsModule } from '@angular/forms'

describe('UpdateVetComponent', () => {
	let component: VetUpdateComponent
	let fixture: ComponentFixture<VetUpdateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetUpdateComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				MatSnackBar,
				Overlay,
				MatDialogActions,
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
		fixture = TestBed.createComponent(VetUpdateComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

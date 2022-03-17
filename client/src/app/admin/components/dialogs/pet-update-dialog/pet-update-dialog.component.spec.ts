import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { PetUpdateDialogComponent } from './pet-update-dialog.component'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('PetUpdateDialogComponent', () => {
	let component: PetUpdateDialogComponent
	let fixture: ComponentFixture<PetUpdateDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetUpdateDialogComponent],
			providers: [
				{
					provide: MatDialogRef,
					useValue: {}
				},
				{
					provide: MAT_DIALOG_DATA,
					useValue: {}
				}
			],
			imports: [
				FormsModule,
				MatDialogModule,
				HttpClientModule,
				MatSnackBarModule,
				MatFormFieldModule,
				MatInputModule,
				BrowserAnimationsModule
			]
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

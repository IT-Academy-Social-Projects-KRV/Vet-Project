import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { VetUpdateComponent } from './vet-update-dialog.component'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('UpdateVetComponent', () => {
	let component: VetUpdateComponent
	let fixture: ComponentFixture<VetUpdateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetUpdateComponent],
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
				MatFormFieldModule,
				MatInputModule,
				BrowserAnimationsModule
			]
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

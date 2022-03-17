import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { VetAddDialogComponent } from './vet-add-dialog.component'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('VetAddDialogComponent', () => {
	let component: VetAddDialogComponent
	let fixture: ComponentFixture<VetAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetAddDialogComponent],
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
		fixture = TestBed.createComponent(VetAddDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

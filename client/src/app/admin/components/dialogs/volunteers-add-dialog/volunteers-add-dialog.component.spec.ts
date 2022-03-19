import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { VolunteersAddDialogComponent } from './volunteers-add-dialog.component'
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list'
import { ReactiveFormsModule } from '@angular/forms'

describe('VolunteersAddDialogComponent', () => {
	let component: VolunteersAddDialogComponent
	let fixture: ComponentFixture<VolunteersAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolunteersAddDialogComponent],
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
				HttpClientModule,
				MatDialogModule,
				MatSnackBarModule,
				MatFormFieldModule,
				MatInputModule,
				BrowserAnimationsModule,
				MatGridListModule,
				ReactiveFormsModule
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

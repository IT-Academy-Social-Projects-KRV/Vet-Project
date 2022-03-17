import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule } from '@angular/forms'
import { PetAddDialogComponent } from './pet-add-dialog.component'
import { HttpClientModule } from '@angular/common/http'

describe('PetAddDialogComponent', () => {
	let component: PetAddDialogComponent
	let fixture: ComponentFixture<PetAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetAddDialogComponent],
			providers: [
				// HttpClient,
				// HttpHandler,
				// MatSnackBar,
				// Overlay,
				{
					provide: MatDialogRef,
					useValue: {}
				}
				// { provide: InjectionToken, useValue: {} },
				// {
				// 	provide: MAT_DIALOG_DATA,
				// 	useValue: {}
				// }
			],
			imports: [FormsModule, MatDialogModule, HttpClientModule, MatSnackBarModule]
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

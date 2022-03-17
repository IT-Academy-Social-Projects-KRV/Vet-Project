import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PetDeleteDialogComponent } from './pet-delete-dialog.component'
import { HttpClientModule } from '@angular/common/http'

describe('PetDeleteDialogComponent', () => {
	let component: PetDeleteDialogComponent
	let fixture: ComponentFixture<PetDeleteDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetDeleteDialogComponent],
			providers: [
				{
					provide: MatDialogRef,
					useValue: {}
				}
			],
			imports: [MatDialogModule, HttpClientModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetDeleteDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

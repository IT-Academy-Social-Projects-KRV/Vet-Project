import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdminEditPetComponent } from './admin-edit-pet.component'

describe('AdminEditPetComponent', () => {
	let component: AdminEditPetComponent
	let fixture: ComponentFixture<AdminEditPetComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminEditPetComponent],
			imports: [
				HttpClientModule,
				MatDialogModule,
				MatSnackBarModule,
				MatFormFieldModule,
				MatInputModule,
				MatPaginatorModule,
				BrowserAnimationsModule,
				MatTableModule
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminEditPetComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

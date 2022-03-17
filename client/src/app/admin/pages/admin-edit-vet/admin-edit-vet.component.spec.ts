import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { AdminEditVetComponent } from './admin-edit-vet.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'

describe('AdminEditVetComponent', () => {
	let component: AdminEditVetComponent
	let fixture: ComponentFixture<AdminEditVetComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminEditVetComponent],
			imports: [
				MatDialogModule,
				HttpClientModule,
				MatPaginatorModule,
				MatSnackBarModule,
				BrowserAnimationsModule,
				MatFormFieldModule,
				MatInputModule,
				MatTableModule
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminEditVetComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

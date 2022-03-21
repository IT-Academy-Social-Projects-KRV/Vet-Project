import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { VolunteersDeleteDialogComponent } from './volunteers-delete-dialog.component'
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon'

describe('VolunteersDeleteDialogComponent', () => {
	let component: VolunteersDeleteDialogComponent
	let fixture: ComponentFixture<VolunteersDeleteDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolunteersDeleteDialogComponent],
			providers: [
				{
					provide: MatDialogRef,
					useValue: {}
				}
			],
			imports: [HttpClientModule, MatDialogModule, MatIconModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VolunteersDeleteDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

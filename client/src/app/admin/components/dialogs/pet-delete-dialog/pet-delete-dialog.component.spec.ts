import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetDeleteDialogComponent } from './pet-delete-dialog.component'

describe('PetDeleteDialogComponent', () => {
	let component: PetDeleteDialogComponent
	let fixture: ComponentFixture<PetDeleteDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetDeleteDialogComponent]
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

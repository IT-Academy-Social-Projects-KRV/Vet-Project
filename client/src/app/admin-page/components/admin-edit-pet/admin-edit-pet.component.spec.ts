import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminEditPetComponent } from './admin-edit-pet.component'

describe('AdminEditPetComponent', () => {
	let component: AdminEditPetComponent
	let fixture: ComponentFixture<AdminEditPetComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminEditPetComponent]
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

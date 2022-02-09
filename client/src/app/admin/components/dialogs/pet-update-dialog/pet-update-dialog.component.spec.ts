import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetUpdateDialogComponent } from './pet-update-dialog.component'

describe('PetUpdateDialogComponent', () => {
	let component: PetUpdateDialogComponent
	let fixture: ComponentFixture<PetUpdateDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetUpdateDialogComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetUpdateDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

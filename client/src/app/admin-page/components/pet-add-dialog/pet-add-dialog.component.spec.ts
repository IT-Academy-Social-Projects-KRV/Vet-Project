import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetAddDialogComponent } from './pet-add-dialog.component'

describe('PetAddDialogComponent', () => {
	let component: PetAddDialogComponent
	let fixture: ComponentFixture<PetAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetAddDialogComponent]
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

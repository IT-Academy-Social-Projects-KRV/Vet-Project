/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetsGethomeComponent } from './pets-gethome.component'

describe('PetsGethomeComponent', () => {
	let component: PetsGethomeComponent
	let fixture: ComponentFixture<PetsGethomeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetsGethomeComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetsGethomeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

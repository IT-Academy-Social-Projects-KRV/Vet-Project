/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetWantedSliderComponent } from './pet-wanted-slider.component'

describe('PetWantedSliderComponent', () => {
	let component: PetWantedSliderComponent
	let fixture: ComponentFixture<PetWantedSliderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetWantedSliderComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetWantedSliderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

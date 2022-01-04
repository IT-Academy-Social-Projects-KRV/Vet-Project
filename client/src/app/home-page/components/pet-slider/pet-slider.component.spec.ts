import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetSliderComponent } from './pet-slider.component'

describe('PetSliderComponent', () => {
	let component: PetSliderComponent
	let fixture: ComponentFixture<PetSliderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetSliderComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PetSliderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

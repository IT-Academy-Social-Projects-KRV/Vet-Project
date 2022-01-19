/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VetSliderComponent } from './vet-slider.component'

describe('VetSliderComponent', () => {
	let component: VetSliderComponent
	let fixture: ComponentFixture<VetSliderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetSliderComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetSliderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

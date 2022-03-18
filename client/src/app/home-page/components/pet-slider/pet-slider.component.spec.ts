/* eslint-disable no-undef */
import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { PetSliderComponent } from './pet-slider.component'

describe('PetSliderComponent', () => {
	let component: PetSliderComponent
	let fixture: ComponentFixture<PetSliderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PetSliderComponent],
			imports: [HttpClientModule, IvyCarouselModule]
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

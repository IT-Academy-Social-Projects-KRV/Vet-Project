/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AnimalPageComponent } from './animal-page.component'

describe('AnimalListPageComponent', () => {
	let component: AnimalPageComponent
	let fixture: ComponentFixture<AnimalPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalPageComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AnimalPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

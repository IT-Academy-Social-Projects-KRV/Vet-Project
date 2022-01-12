/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AnimalListCardComponent } from './animal-list-card.component'

describe('AnimalListCardComponent', () => {
	let component: AnimalListCardComponent
	let fixture: ComponentFixture<AnimalListCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalListCardComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AnimalListCardComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

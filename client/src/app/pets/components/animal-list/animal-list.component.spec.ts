/* eslint-disable no-undef */
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AnimalListComponent } from './animal-list.component'

describe('AnimalListComponent', () => {
	let component: AnimalListComponent
	let fixture: ComponentFixture<AnimalListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalListComponent],
			providers: [HttpClient, HttpHandler]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AnimalListComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

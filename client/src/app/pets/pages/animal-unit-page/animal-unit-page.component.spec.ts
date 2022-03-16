/* eslint-disable no-undef */
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { PetsGethomeComponent } from '../../components/pets-gethome/pets-gethome.component'

import { AnimalUnitPageComponent } from './animal-unit-page.component'

describe('AnimalUnitPageComponent', () => {
	let component: AnimalUnitPageComponent
	let fixture: ComponentFixture<AnimalUnitPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalUnitPageComponent, PetsGethomeComponent],
			providers: [HttpClient, HttpHandler, { provide: ActivatedRoute, useValue: {} }]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AnimalUnitPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

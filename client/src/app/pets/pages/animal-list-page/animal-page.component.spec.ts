/* eslint-disable no-undef */
import { Overlay } from '@angular/cdk/overlay'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AnimalListComponent } from '../../components/animal-list/animal-list.component'
import { PetsFilterComponent } from '../../components/pets-filter/pets-filter.component'

import { AnimalPageComponent } from './animal-page.component'

describe('AnimalListPageComponent', () => {
	let component: AnimalPageComponent
	let fixture: ComponentFixture<AnimalPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalPageComponent, PetsFilterComponent, AnimalListComponent],
			providers: [HttpClient, HttpHandler, MatSnackBar, Overlay]
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

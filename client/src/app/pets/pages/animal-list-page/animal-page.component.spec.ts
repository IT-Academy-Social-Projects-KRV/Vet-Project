/* eslint-disable no-undef */
import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { AnimalListComponent } from '../../components/animal-list/animal-list.component'
import { PetsFilterComponent } from '../../components/pets-filter/pets-filter.component'

import { AnimalPageComponent } from './animal-page.component'

describe('AnimalListPageComponent', () => {
	let component: AnimalPageComponent
	let fixture: ComponentFixture<AnimalPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalPageComponent, PetsFilterComponent, AnimalListComponent],

			imports: [HttpClientModule, MatSnackBarModule]
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

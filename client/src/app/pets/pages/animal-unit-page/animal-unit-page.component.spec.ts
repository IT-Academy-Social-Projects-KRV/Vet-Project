/* eslint-disable no-undef */
import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { PetsGethomeComponent } from '../../components/pets-gethome/pets-gethome.component'
import { AnimalUnitPageComponent } from './animal-unit-page.component'

describe('AnimalUnitPageComponent', () => {
	let component: AnimalUnitPageComponent
	let fixture: ComponentFixture<AnimalUnitPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalUnitPageComponent, PetsGethomeComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						paramMap: of({ id: 1 })
					}
				}
			],
			imports: [HttpClientModule]
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

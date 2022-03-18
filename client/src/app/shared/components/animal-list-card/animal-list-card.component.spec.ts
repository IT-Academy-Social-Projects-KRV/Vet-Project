/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { of } from 'rxjs'
import { AnimalListCardComponent } from './animal-list-card.component'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { AppRoutingModule } from 'src/app/app-routing.module'

describe('AnimalListCardComponent', () => {
	let component: AnimalListCardComponent
	let fixture: ComponentFixture<AnimalListCardComponent>
	const mockIAnimalsInfo: IAnimalsInfo = {
		id: 1,
		name: '',
		gender: '',
		breed: '',
		age: 2,
		curator: ''
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AnimalListCardComponent],
			imports: [MatCardModule, AppRoutingModule, ],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						params: of({ id: 1 })
					}
				}
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AnimalListCardComponent)
		component = fixture.componentInstance
		component.animalsInfo = mockIAnimalsInfo
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

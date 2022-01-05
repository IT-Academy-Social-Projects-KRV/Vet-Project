import { TestBed } from '@angular/core/testing'

import { AnimalUnitInfoService } from './animal-unit-info.service'

describe('AnimalUnitInfoService', () => {
	let service: AnimalUnitInfoService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(AnimalUnitInfoService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})

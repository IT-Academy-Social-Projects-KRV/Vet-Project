/* eslint-disable no-undef */
import { TestBed } from '@angular/core/testing'

import { AnimalInfoService } from './animal-info.service'

describe('AnimalInfoService', () => {
	let service: AnimalInfoService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(AnimalInfoService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})

import { TestBed } from '@angular/core/testing'

import { VetInfoService } from './vet-info.service'

describe('VetInfoService', () => {
	let service: VetInfoService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(VetInfoService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})

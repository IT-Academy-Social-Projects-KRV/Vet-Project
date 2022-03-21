import { TestBed } from '@angular/core/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { NotifierService } from './shared/services/notifier.service'

describe('NotifierService', () => {
	let service: NotifierService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MatSnackBarModule]
		})
		service = TestBed.inject(NotifierService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})

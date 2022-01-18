import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminEditVolonteerComponent } from './admin-edit-volonteer.component'

describe('AdminEditVolonteerComponent', () => {
	let component: AdminEditVolonteerComponent
	let fixture: ComponentFixture<AdminEditVolonteerComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminEditVolonteerComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminEditVolonteerComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

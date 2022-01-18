/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VetUnitPageComponent } from './vet-unit-page.component'

describe('VetUnitPageComponent', () => {
	let component: VetUnitPageComponent
	let fixture: ComponentFixture<VetUnitPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetUnitPageComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetUnitPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

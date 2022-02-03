import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VetsFilterComponent } from './vets-filter.component'

describe('VetsFilterComponent', () => {
	let component: VetsFilterComponent
	let fixture: ComponentFixture<VetsFilterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetsFilterComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetsFilterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

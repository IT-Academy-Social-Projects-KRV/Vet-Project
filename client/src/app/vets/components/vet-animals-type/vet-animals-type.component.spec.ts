import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VetAnimalsTypeComponent } from './vet-animals-type.component'

describe('VetAnimalsTypeComponent', () => {
	let component: VetAnimalsTypeComponent
	let fixture: ComponentFixture<VetAnimalsTypeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetAnimalsTypeComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetAnimalsTypeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

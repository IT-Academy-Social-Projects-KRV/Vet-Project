import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VetUpdateComponent } from './vet-update-dialog.component'

describe('UpdateVetComponent', () => {
	let component: VetUpdateComponent
	let fixture: ComponentFixture<VetUpdateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetUpdateComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetUpdateComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

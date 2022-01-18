/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { VolonteersPageComponent } from './volonteers-page.component'

describe('VolonteersPageComponent', () => {
	let component: VolonteersPageComponent
	let fixture: ComponentFixture<VolonteersPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolonteersPageComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VolonteersPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

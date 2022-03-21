import { Overlay } from '@angular/cdk/overlay'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'

import { VetsFilterComponent } from './vets-filter.component'

describe('VetsFilterComponent', () => {
	let component: VetsFilterComponent
	let fixture: ComponentFixture<VetsFilterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetsFilterComponent],
			providers: [HttpClient, HttpHandler, MatSnackBar, Overlay]
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

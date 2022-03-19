/* eslint-disable no-undef */
import { Overlay } from '@angular/cdk/overlay'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { VetListComponent } from '../../components/vet-list/vet-list.component'
import { VetsFilterComponent } from '../../components/vets-filter/vets-filter.component'

import { VetPageComponent } from './vet-page.component'

describe('VetPageComponent', () => {
	let component: VetPageComponent
	let fixture: ComponentFixture<VetPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetPageComponent, VetsFilterComponent, VetListComponent],
			providers: [HttpClient, HttpHandler, MatSnackBar, Overlay]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

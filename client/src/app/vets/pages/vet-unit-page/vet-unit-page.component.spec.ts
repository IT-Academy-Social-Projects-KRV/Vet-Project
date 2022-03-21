/* eslint-disable no-undef */
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { VetUnitPageComponent } from './vet-unit-page.component'

describe('VetUnitPageComponent', () => {
	let component: VetUnitPageComponent
	let fixture: ComponentFixture<VetUnitPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetUnitPageComponent],
			providers: [
				HttpClient,
				HttpHandler,
				{
					provide: ActivatedRoute,
					useValue: { paramMap: of({ id: 1 }) }
				}
			]
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

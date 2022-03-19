import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'

import { VolonteersUnitPageComponent } from './volonteers-unit-page.component'

describe('VolonteersUnitPageComponent', () => {
	let component: VolonteersUnitPageComponent
	let fixture: ComponentFixture<VolonteersUnitPageComponent>
	let mockSomeService = {
		getData: () => {}
	}
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolonteersUnitPageComponent],
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
		fixture = TestBed.createComponent(VolonteersUnitPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

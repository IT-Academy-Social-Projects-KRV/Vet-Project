/* eslint-disable no-undef */
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { VolonteersListComponent } from '../../components/volonteers-list/volonteers-list.component'
import { VolonteersPageComponent } from './volonteers-page.component'

describe('VolonteersPageComponent', () => {
	let component: VolonteersPageComponent
	let fixture: ComponentFixture<VolonteersPageComponent>
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolonteersPageComponent, VolonteersListComponent],
			providers: [HttpClient, HttpHandler]
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

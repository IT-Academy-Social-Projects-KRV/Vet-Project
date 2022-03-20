/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatIcon } from '@angular/material/icon'
import { RouterLink } from '@angular/router'
import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent, MatIcon]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

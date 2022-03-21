import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogContent } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { LogoutModalComponent } from './logout-modal.component'

describe('LogoutModalComponent', () => {
	let component: LogoutModalComponent
	let fixture: ComponentFixture<LogoutModalComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LogoutModalComponent, MatDialogContent],
			providers: [{ provide: Router, useValue: {} }]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoutModalComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

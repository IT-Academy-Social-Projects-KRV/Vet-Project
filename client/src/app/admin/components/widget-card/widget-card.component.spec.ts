import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatIconModule } from '@angular/material/icon'
import { ChartModule } from 'angular-highcharts'

import { WidgetCardComponent } from './widget-card.component'

describe('WidgetCardComponent', () => {
	let component: WidgetCardComponent
	let fixture: ComponentFixture<WidgetCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WidgetCardComponent],
			imports: [MatIconModule, ChartModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(WidgetCardComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

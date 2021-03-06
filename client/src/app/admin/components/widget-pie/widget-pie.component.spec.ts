import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ChartModule } from 'angular-highcharts'

import { WidgetPieComponent } from './widget-pie.component'

describe('WidgetPieComponent', () => {
	let component: WidgetPieComponent
	let fixture: ComponentFixture<WidgetPieComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WidgetPieComponent],
			imports: [ChartModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(WidgetPieComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

import { Component, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
	selector: 'app-widget-card',
	templateUrl: './widget-card.component.html',
	styleUrls: ['./widget-card.component.scss']
})
export class WidgetCardComponent {
	@Input() label: string
	@Input() total: string
	@Input() percentage: string

	chart: Chart

	initChart(data) {
		let chart = new Chart({
			chart: {
				type: 'area',
				backgroundColor: null,
				borderWidth: 0,
				margin: [2, 2, 2, 2],
				height: 60
			},
			title: {
				text: null
			},
			subtitle: {
				text: null
			},
			tooltip: {
				split: true,
				outside: true
			},
			legend: {
				enabled: false
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			series: [{ type: undefined, name: this.label, data: data }]
		})
		this.chart = chart
	}
	constructor() {}
}

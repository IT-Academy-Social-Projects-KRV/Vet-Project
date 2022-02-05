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
	@Input() data = []

	getData(data) {
		this.data = data
		this.init()
	}

	chart: Chart

	init() {
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
			series: [{ type: undefined, name: 'name I', data: this.data }]
		})
		this.chart = chart
	}
	constructor() {}
}

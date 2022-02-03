import { Component, OnInit, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
	selector: 'app-widget-card',
	templateUrl: './widget-card.component.html',
	styleUrls: ['./widget-card.component.scss']
})
export class WidgetCardComponent implements OnInit {
	@Input() label: string
	@Input() total: string
	@Input() percentage: string
	@Input() data = []
	chartOptions = {}

	chart = new Chart({
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
		series: [{ type: undefined, name: 'name I', data: [1, 2, 3] }]
	})

	constructor() {}

	ngOnInit() {
		// setTimeout(() => {
		// 	window.dispatchEvent(new Event('resize'))
		// }, 300)
	}
}

import { Component, OnInit, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
	selector: 'app-widget-pie',
	templateUrl: './widget-pie.component.html',
	styleUrls: ['./widget-pie.component.scss']
})
export class WidgetPieComponent implements OnInit {
	@Input() data = []

	chart: Chart

	ngOnInit() {
		this.init()
	}
	init() {
		let chart = new Chart({
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Статистика'
			},
			credits: {
				enabled: false
			},
			tooltip: {
				pointFormat: '<b>{point.y:.0f}</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %'
					}
				}
			},
			series: [
				{
					type: undefined,
					colorByPoint: true,
					data: this.data
				}
			]
		})
		this.chart = chart
	}

	constructor() {}
}

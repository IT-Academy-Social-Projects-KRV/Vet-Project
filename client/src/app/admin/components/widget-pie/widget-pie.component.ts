import { Component, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
	selector: 'app-widget-pie',
	templateUrl: './widget-pie.component.html',
	styleUrls: ['./widget-pie.component.scss']
})
export class WidgetPieComponent {
	chart: Chart

	initChart(vets, pets, volonteers) {
		let chart = new Chart({
			chart: {
				type: 'pie',
				backgroundColor: null
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
					data: [
						{
							name: 'Тваринки',
							y: pets,
							sliced: false,
							selected: false
						},
						{
							name: 'Клініки',
							y: vets
						},
						{
							name: 'Волонтери',
							y: volonteers
						}
					]
				}
			]
		})
		this.chart = chart
	}

	constructor() {}
}

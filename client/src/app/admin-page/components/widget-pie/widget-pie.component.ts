import { Component, OnInit, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
	selector: 'app-widget-pie',
	templateUrl: './widget-pie.component.html',
	styleUrls: ['./widget-pie.component.scss']
})
export class WidgetPieComponent implements OnInit {
	chart = new Chart({
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Piechart'
		},
		credits: {
			enabled: false
		},
		// tooltip: {
		// 	pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		// },
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
						y: 23,
						sliced: true,
						selected: true
					},
					{
						name: 'Клініки',
						y: 12
					},
					{
						name: 'Волонтери',
						y: 6
					}
				]
			}
		]
	})
	chartOptions = {}

	@Input() data = []

	constructor() {}

	ngOnInit() {

		setTimeout(() => {
			window.dispatchEvent(new Event('resize'))
		}, 300)
	}
}

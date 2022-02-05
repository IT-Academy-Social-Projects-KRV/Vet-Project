import { Component, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
	selector: 'app-widget-pie',
	templateUrl: './widget-pie.component.html',
	styleUrls: ['./widget-pie.component.scss']
})
export class WidgetPieComponent {
	@Input() data = []
	@Input() vetsNumber
	@Input() petsNumber
	@Input() volonteersNumber

	chart: Chart
	getData(vets, pets, volonteers) {
		this.vetsNumber = vets
		this.petsNumber = pets
		this.volonteersNumber = volonteers
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
					data: [
						{
							name: 'Тваринки',
							y: this.petsNumber,
							sliced: false,
							selected: false
						},
						{
							name: 'Клініки',
							y: this.vetsNumber
						},
						{
							name: 'Волонтери',
							y: this.volonteersNumber
						}
					]
				}
			]
		})
		this.chart = chart
	}

	constructor() {}
}

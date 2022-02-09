import { Component, ViewChild } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { forkJoin } from 'rxjs'
import { WidgetCardComponent } from '../../components/widget-card/widget-card.component'
import { WidgetPieComponent } from '../../components/widget-pie/widget-pie.component'

@Component({
	selector: 'app-admin-statistic',
	templateUrl: './admin-statistic.component.html',
	styleUrls: ['./admin-statistic.component.scss']
})
export class AdminStatisticComponent {
	@ViewChild('pets', { static: true }) pets: WidgetCardComponent
	@ViewChild('vets', { static: true }) vets: WidgetCardComponent
	@ViewChild('volonteers', { static: true }) volonteers: WidgetCardComponent
	@ViewChild('pie', { static: true }) pie: WidgetPieComponent
	numberOfPets: number = 1
	numberOfVets: number = 1
	numberOfVolonteers: number = 1
	cards: []
	pieChart: []

	constructor(private apiservice: ApiServices) {}

	// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
	ngOnInit() {
		this.apiservice.getCounts().subscribe(res => {
			const { pets, vets, volonteers } = res
			this.numberOfPets = pets
			this.numberOfVets = vets
			this.numberOfVolonteers = volonteers
			this.pets.initChart([this.numberOfVets, this.numberOfPets, this.numberOfVolonteers])
			this.vets.initChart([this.numberOfPets, this.numberOfVets, this.numberOfVolonteers])
			this.volonteers.initChart([this.numberOfVolonteers, this.numberOfPets, this.numberOfPets])
			this.pie.initChart(this.numberOfVets, this.numberOfPets, this.numberOfVolonteers)
		})
	}
}

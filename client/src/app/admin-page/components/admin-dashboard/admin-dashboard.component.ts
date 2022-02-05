import { Component, ViewChild } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { DashboardService } from './dashboard.service'
import { forkJoin } from 'rxjs'
import { WidgetCardComponent } from '../widget-card/widget-card.component'

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
	@ViewChild('pets', { static: true }) pets: WidgetCardComponent
	@ViewChild('vets', { static: true }) vets: WidgetCardComponent
	@ViewChild('volonteers', { static: true }) volonteers: WidgetCardComponent
	numberOfPets
	numberOfVets
	numberOfVolonteers
	cards = []
	pieChart = []

	constructor(private dashboardService: DashboardService, private apiservice: ApiServices) {}

	// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
	ngOnInit() {
		// this.cards = this.dashboardService.cards()
		this.pieChart = this.dashboardService.pieChart()
		forkJoin({
			vets: this.apiservice.getVetDetails(),
			animals: this.apiservice.getAnimalsInfo(),
			volonteers: this.apiservice.getVolonteersInfo()
		}).subscribe(res => {
			this.numberOfVets = res.vets.length
			this.numberOfPets = res.animals.length
			this.numberOfVolonteers = res.volonteers.length
			// this.cards = [this.numberOfVets, ]
			this.pets.getFoo([this.numberOfVets, this.numberOfPets, this.numberOfVolonteers])
			this.vets.getFoo([this.numberOfPets, this.numberOfVets, this.numberOfVolonteers])
			this.volonteers.getFoo([this.numberOfVolonteers, this.numberOfPets, this.numberOfVets])
			// this.cards = [this.numberOfVets, 2, 3]
			// console.log(this.cards)
			// console.log(this.cards)
		})
		// this.cards = [1, 2, 3]
	}
}

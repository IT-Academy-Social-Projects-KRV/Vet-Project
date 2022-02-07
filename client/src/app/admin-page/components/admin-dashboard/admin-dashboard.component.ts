import { Component, ViewChild } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { forkJoin } from 'rxjs'
import { WidgetCardComponent } from '../widget-card/widget-card.component'
import { WidgetPieComponent } from '../widget-pie/widget-pie.component'

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
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
		forkJoin({
			amount: this.apiservice.getCounts()
		}).subscribe(res => {
			let getAmount = res.amount.map(x => {
				let { count } = x
				return +count
			})
			this.numberOfPets = getAmount[0]
			this.numberOfVets = getAmount[1]
			this.numberOfVolonteers = getAmount[2]
			this.pets.getData([this.numberOfVets, this.numberOfPets, this.numberOfVolonteers])
			this.vets.getData([this.numberOfPets, this.numberOfVets, this.numberOfVolonteers])
			this.volonteers.getData([this.numberOfVolonteers, this.numberOfPets, this.numberOfPets])
			this.pie.getData(this.numberOfVets, this.numberOfPets, this.numberOfVolonteers)
		})
	}
}

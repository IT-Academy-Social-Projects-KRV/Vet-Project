import { Component } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { DashboardService } from './dashboard.service'

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
	numberOfPets
	numberOfVets
	numberOfVolonteers
	cards = []
	pieChart = []

	constructor(private dashboardService: DashboardService, private apiservice: ApiServices) {}

	// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
	ngOnInit() {
		this.cards = this.dashboardService.cards()
		this.pieChart = this.dashboardService.pieChart()
		this.apiservice.getVetDetails().subscribe(res => {
			this.numberOfVets = res.length
		})
		this.apiservice.getAnimalsInfo().subscribe(res => {
			this.numberOfPets = res.length
		})
		this.apiservice.getVolonteersInfo().subscribe(res => {
			this.numberOfVolonteers = res.length
		})
	}
}

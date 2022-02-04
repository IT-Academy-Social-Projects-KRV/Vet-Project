import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { DashboardService } from './dashboard.service'
import { MatTableDataSource } from '@angular/material/table'

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
	cards = []
	pieChart = []

	constructor(private dashboardService: DashboardService) {}

	// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
	ngOnInit() {
		this.cards = this.dashboardService.cards()
		this.pieChart = this.dashboardService.pieChart()
	}
}

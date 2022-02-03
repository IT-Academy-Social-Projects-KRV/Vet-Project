import { Component } from '@angular/core'
import { map } from 'rxjs/operators'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { ApiServices } from '@shared/services/api.service'
import { Observable, Subscription } from 'rxjs'

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
	/** Based on the screen size, switch from standard to one column per row */
	vetsAmount: any
	// cards: any

	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'Тварин:', cols: 1, rows: 1, amount: this.vetsAmount },
					{ title: 'Клінік:', cols: 1, rows: 1, amount: 2 },
					{ title: 'Волонтерів:', cols: 1, rows: 1, amount: 3 }
				]
			}

			return [
				{ title: 'Тварин:', cols: 1, rows: 1, amount: this.vetsAmount },
				{ title: 'Клінік:', cols: 1, rows: 1, amount: 2 },
				{ title: 'Волонтерів:', cols: 1, rows: 1, amount: 3 }
			]
		})
	)

	// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
	ngOnInit(): void {
		this.vetsAmount = this.apiservice.getAnimalsInfo().subscribe(result => {
			this.vetsAmount = result.length
			console.log(this.vetsAmount)
		})
	}

	// ngOnInit(): void {
	// 	this.apiservice.getAnimalsInfo().subscribe(result => {
	// 		this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
	// 			map(({ matches }) => {
	// 				if (matches) {
	// 					return [
	// 						{ title: 'Тварин:', cols: 1, rows: 1, amount: this.vetsAmount },
	// 						{ title: 'Клінік:', cols: 1, rows: 1, amount: 2 },
	// 						{ title: 'Волонтерів:', cols: 1, rows: 1, amount: 3 }
	// 					]
	// 				}

	// 				return [
	// 					{ title: 'Тварин:', cols: 1, rows: 1, amount: this.vetsAmount },
	// 					{ title: 'Клінік:', cols: 1, rows: 1, amount: 2 },
	// 					{ title: 'Волонтерів:', cols: 1, rows: 1, amount: 3 }
	// 				]
	// 			})
	// 		)
	// 		this.vetsAmount = result.length
	// 		console.log(this.vetsAmount)
	// 	})
	// }
	constructor(private breakpointObserver: BreakpointObserver, private apiservice: ApiServices) {}
}

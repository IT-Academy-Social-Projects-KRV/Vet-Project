import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class DashboardService {
	constructor() {}

	cards() {
		return [71, 78, 39, 66]
	}

	pieChart() {
		return [
			{
				name: 'Тваринки',
				y: 23,
				sliced: false,
				selected: false
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
}

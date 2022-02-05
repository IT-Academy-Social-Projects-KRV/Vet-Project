import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class DashboardService {
	volonteersNumber = 6

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
				y: this.volonteersNumber
			}
		]
	}
}

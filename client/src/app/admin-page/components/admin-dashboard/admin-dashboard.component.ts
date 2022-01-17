import { Component} from '@angular/core'
import { map } from 'rxjs/operators'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { AnimalInfoService } from '@shared/services/animal-info.service'

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'К-сть тварин', cols: 1, rows: 1},
					{ title: 'К-сть клінік', cols: 1, rows: 1 },
					{ title: 'К-сть волонтерів', cols: 1, rows: 1 },
					{ title: 'Card 4', cols: 1, rows: 1 }
				]
			}

			return [
				{ title: 'К-сть тварин', cols: 1, rows: 1 },
				{ title: 'К-сть клінік', cols: 1, rows: 1 },
				{ title: 'К-сть волонтерів', cols: 1, rows: 1 },
				{ title: 'Card 4', cols: 1, rows: 1 }
			]
		})
  )
  //testing something
	animalsInfo: any = []
	// eslint-disable-next-line no-unused-vars
	constructor(
		private breakpointObserver: BreakpointObserver,
		private animalInfo: AnimalInfoService
	) {
		this.animalInfo.getAnimalsInfo().subscribe(item => {
      this.animalsInfo = item
		})
	}

	// constructor(private breakpointObserver: BreakpointObserver) {}
}

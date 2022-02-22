import { Component } from '@angular/core'
import { LoadingService } from '@shared/services/loading.service'

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
	constructor(private loader: LoadingService) {}

	loading$ = this.loader.loading$
}
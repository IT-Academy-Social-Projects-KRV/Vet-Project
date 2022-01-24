/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-vet-slider',
	templateUrl: './vet-slider.component.html',
	styleUrls: ['./vet-slider.component.scss']
})
export class VetSliderComponent {
	vetsInfo$: Observable<any>

	constructor(private apiServices: ApiServices) {}
	ngOnInit(): void {
		this.vetsInfo$ = this.apiServices.getVetDetails()
	}
}

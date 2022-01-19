import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-vet-slider',
	templateUrl: './vet-slider.component.html',
	styleUrls: ['./vet-slider.component.scss']
})
export class VetSliderComponent {
	vetsInfo: any = []
	constructor(private apiServices: ApiServices) {
		this.apiServices.getVetDetails().subscribe(item => {
			this.vetsInfo = item
		})
	}
}

import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { VetInfoService } from '@shared/services/vet-info.service'

@Component({
	selector: 'app-vet-slider',
	templateUrl: './vet-slider.component.html',
	styleUrls: ['./vet-slider.component.scss']
})
export class VetSliderComponent implements OnInit {
	vetsInfo: any = []
	constructor(private vetInfo: VetInfoService) {
		this.vetInfo.getVetDetails().subscribe(item => {
			this.vetsInfo = item
		})
	}

	ngOnInit(): void {}
}

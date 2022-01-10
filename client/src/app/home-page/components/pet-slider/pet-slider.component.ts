import { Component, OnInit, Input } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { VetInfoService } from '@shared/services/vet-info.service'

@Component({
	selector: 'app-pet-slider',
	templateUrl: './pet-slider.component.html',
	styleUrls: ['./pet-slider.component.scss']
})
export class PetSliderComponent implements OnInit {
	@Input() vetsDetailInfo: any = []

	constructor(private vetDetailInfo: VetInfoService) {
		this.vetDetailInfo.getVetDetails().subscribe(item => {
			this.vetsDetailInfo = item
		})
	}

	ngOnInit(): void {}
}

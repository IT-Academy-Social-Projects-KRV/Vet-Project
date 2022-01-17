/* eslint-disable no-unused-vars */
import { Component } from '@angular/core'
import { VetInfoService } from '@shared/services/vet-info.service'

@Component({
	selector: 'app-vet-list',
	templateUrl: './vet-list.component.html',
	styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent {
	vetsDetailInfo: any = []

	constructor(private vetDetailInfo: VetInfoService) {
		this.vetDetailInfo.getVetDetails().subscribe(item => {
			this.vetsDetailInfo = item
		})
	}
}

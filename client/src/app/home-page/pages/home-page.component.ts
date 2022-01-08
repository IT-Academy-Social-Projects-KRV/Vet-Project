import { Component, OnInit } from '@angular/core'
import { VetInfoService } from '@shared/services/vet-info.service'

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	vetsDetailInfo: any = []

	constructor(private vetDetailInfo: VetInfoService) {
		this.vetDetailInfo.getVetDetails().subscribe(item => {
			this.vetsDetailInfo = item
		})
	}

	ngOnInit(): void {}
}

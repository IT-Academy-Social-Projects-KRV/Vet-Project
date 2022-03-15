import { Component, OnInit } from '@angular/core'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-vet-page',
	templateUrl: './vet-page.component.html',
	styleUrls: ['./vet-page.component.scss']
})
export class VetPageComponent implements OnInit {
	clinicsInfo$: Observable<IVetsInfo[]>

	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.clinicsInfo$ = this.apiServices.getVetDetails()
	}

	updateVetListInfo(event) {
		this.clinicsInfo$ = event
	}
}

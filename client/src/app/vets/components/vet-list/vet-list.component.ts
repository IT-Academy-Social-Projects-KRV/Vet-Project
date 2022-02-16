import { Component, OnInit } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'
import { IVetsInfo } from '@shared/interfaces/vetInfo'

@Component({
	selector: 'app-vet-list',
	templateUrl: './vet-list.component.html',
	styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
	vetsDetailInfo$: Observable<IVetsInfo[]>

	constructor(private apiServices: ApiServices) {}
	ngOnInit(): void {
		this.vetsDetailInfo$ = this.apiServices.getVetDetails()
	}
}

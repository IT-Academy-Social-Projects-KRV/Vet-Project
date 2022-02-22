import { Component, OnInit } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { TransferDataService } from '../../transfer-data.service'

@Component({
	selector: 'app-vet-list',
	templateUrl: './vet-list.component.html',
	styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
	vetsDetailInfo$: Observable<IVetsInfo[]>

	constructor(private apiServices: ApiServices, private transferData: TransferDataService) {}
	ngOnInit(): void {
		// this.vetsDetailInfo$ = this.apiServices.getVetDetails()
		this.transferData.getData()
		this.vetsDetailInfo$ = this.transferData.returnData()
	}
}

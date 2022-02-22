import { Injectable } from '@angular/core'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class TransferDataService {
	constructor(private apiService: ApiServices) {}

	vetsDetailInfo$: Observable<IVetsInfo[]>

	getData() {
		this.vetsDetailInfo$ = this.apiService.getVetDetails()
	}

	returnData() {
		return this.vetsDetailInfo$
	}

	getFilterData(url) {
		this.vetsDetailInfo$ = this.apiService.getVetsFilterInfo(url)
	}
}

import { Component, OnInit } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'

@Component({
	selector: 'app-volonteers-list',
	templateUrl: './volonteers-list.component.html',
	styleUrls: ['./volonteers-list.component.scss']
})
export class VolonteersListComponent implements OnInit {
	volonteersDetailInfo$: Observable<IVolonteersInfo[]>

	constructor(private apiServices: ApiServices) {}
	ngOnInit(): void {
		this.volonteersDetailInfo$ = this.apiServices.getVolonteersInfo()
	}
}

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiServices } from '@shared/services/api.service'

import { ActivatedRoute } from '@angular/router'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'

@Component({
	selector: 'app-volonteers-unit-page',
	templateUrl: './volonteers-unit-page.component.html',
	styleUrls: ['./volonteers-unit-page.component.scss']
})
export class VolonteersUnitPageComponent implements OnInit {
	id: string

	volonteersInfo$: Observable<IVolonteersInfo>

	constructor(private apiServices: ApiServices, private Activatedroute: ActivatedRoute) {
		this.Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
	}
	ngOnInit(): void {
		this.volonteersInfo$ = this.apiServices.getVolonteersUnitInfo(this.id)
	}
}

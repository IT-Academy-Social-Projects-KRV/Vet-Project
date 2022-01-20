/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiServices } from '@shared/services/api.service'

import { ActivatedRoute } from '@angular/router'
@Component({
	selector: 'app-vet-unit-page',
	templateUrl: './vet-unit-page.component.html',
	styleUrls: ['./vet-unit-page.component.scss']
})
export class VetUnitPageComponent implements OnInit {

	id: string

	vetsInfo$: Observable<any>

	constructor(private apiServices: ApiServices, private Activatedroute: ActivatedRoute) {
		this.Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
	}
	ngOnInit(): void {
		this.vetsInfo$ = this.apiServices.getVetsUnitInfo(this.id)
	}
}

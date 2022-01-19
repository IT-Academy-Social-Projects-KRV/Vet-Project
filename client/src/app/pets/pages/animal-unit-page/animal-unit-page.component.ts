/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'

@Component({
	selector: 'app-animal-unit-page',
	templateUrl: './animal-unit-page.component.html',
	styleUrls: ['./animal-unit-page.component.scss']
})
export class AnimalUnitPageComponent implements OnInit {
	id: string
	petsInfo$: Observable<any>

	constructor(private apiServices: ApiServices, private Activatedroute: ActivatedRoute) {
		this.Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
	}
	ngOnInit(): void {
		this.petsInfo$ = this.apiServices.getAnimalsUnitInfo(this.id)
	}
}

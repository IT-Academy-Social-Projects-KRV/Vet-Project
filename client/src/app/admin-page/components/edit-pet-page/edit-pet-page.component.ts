import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { map, Observable } from 'rxjs'

@Component({
	selector: 'app-edit-pet-page',
	templateUrl: './edit-pet-page.component.html',
	styleUrls: ['./edit-pet-page.component.scss']
})
export class EditPetPageComponent implements OnInit {
	@Input() animalsInfo: any

	id: string
	animalsInfo$: Observable<any>

	constructor(private apiServices: ApiServices, private Activatedroute: ActivatedRoute) {}

	ngOnInit(): void {
		this.Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
		this.animalsInfo$ = this.apiServices.getAnimalsUnitInfo(this.id)
	}
}

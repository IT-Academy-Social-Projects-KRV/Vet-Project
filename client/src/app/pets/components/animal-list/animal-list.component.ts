
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiServices } from '../../../shared/services/api.service'

@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
	animalsInfo$: Observable<any>
	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.animalsInfo$ = this.apiServices.getAnimalsInfo()
	}
}

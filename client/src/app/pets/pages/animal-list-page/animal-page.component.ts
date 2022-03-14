import { Component, OnInit } from '@angular/core'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-animal-list-page',
	templateUrl: './animal-page.component.html',
	styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent implements OnInit {
	animalsInfo$: Observable<IAnimalsInfo[]>

	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.animalsInfo$ = this.apiServices.getAnimalsInfo()
	}

	updateListInfo(event) {
		this.animalsInfo$ = event
	}
}

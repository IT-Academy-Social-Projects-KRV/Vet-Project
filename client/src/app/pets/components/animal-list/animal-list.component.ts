import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiServices } from '../../../shared/services/api.service'
import { IAnimalsInfo } from '@shared/interfaces/animals'
@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {
	@Input()
	animalsInfo$: Observable<IAnimalsInfo[]>
	constructor(private apiServices: ApiServices) {}
}

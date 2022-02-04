import { Component, Input } from '@angular/core'
import { IAnimalsInfo } from '@shared/interfaces/animals'

@Component({
	selector: 'app-animal-list-card',
	templateUrl: './animal-list-card.component.html',
	styleUrls: ['./animal-list-card.component.scss']
})
export class AnimalListCardComponent {
	@Input() animalsInfo: IAnimalsInfo
	@Input() isButtonVisible = false
}

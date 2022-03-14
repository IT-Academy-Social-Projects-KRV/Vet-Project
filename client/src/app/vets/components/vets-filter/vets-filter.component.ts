import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Observable } from 'rxjs'

import { ApiServices } from '../../../shared/services/api.service'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { NotifierService } from '@shared/services/notifier.service'

@Component({
	selector: 'app-vets-filter',
	templateUrl: './vets-filter.component.html',
	styleUrls: ['./vets-filter.component.scss']
})
export class VetsFilterComponent {
	@Output() newItemEvent = new EventEmitter<any>()
	@Input() vetsInfo$: Observable<IVetsInfo[]>

	public vet: IVetsInfo = {
		title: '',
		adress: '',
		animal_type: ''
	}
	paramsArr = []

	constructor(private apiServices: ApiServices, private notifierService: NotifierService) {}

	onSubmite(): void {
		this.paramsArr = []
		this.checkParams()
		let getUrl = this.paramsArr.join('&')
		this.getVetsInfo(getUrl)
	}

	checkParams(): void {
		if (this.vet.title !== '') {
			this.paramsArr.push(`title=${this.vet.title}`)
		}
		if (this.vet.adress !== '') {
			this.paramsArr.push(`adress=${this.vet.adress}`)
		}
		if (this.vet.animal_type !== '') {
			this.paramsArr.push(`animal_type=${this.vet.animal_type}`)
		}
	}

	getVetsInfo(url): void {
		this.newItemEvent.emit(this.apiServices.getVetsFilterInfo(url))
		this.apiServices.getVetsFilterInfo(url).subscribe(item => {
			if (item.length == 0) {
				this.notifierService.showInfoNotification(
					'Hе знайдено жодної клініки з такими параметрами',
					'Ok'
				)
			} else {
				this.notifierService.showSuccessNotification(
					`Ми знайшли для Вас ${item.length} клінік`,
					'Ok'
				)
			}
		})
	}
}

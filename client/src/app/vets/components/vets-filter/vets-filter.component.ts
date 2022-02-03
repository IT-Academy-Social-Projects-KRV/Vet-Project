import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { ApiServices } from '../../../shared/services/api.service'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { NotifierService } from 'src/app/notifier.service'

@Component({
	selector: 'app-vets-filter',
	templateUrl: './vets-filter.component.html',
	styleUrls: ['./vets-filter.component.scss']
})
export class VetsFilterComponent implements OnInit {
	public vetsInfo$: Observable<IVetsInfo[]>
	public vetsFilterInfo$: Observable<IVetsInfo[]>

	public vet: IVetsInfo = {
		title: '',
		adress: ''
		// phone: '',
		// email: ''
	}
	paramsArr = []

	constructor(private apiServices: ApiServices, private notifierService: NotifierService) {}

	ngOnInit(): void {
		this.vetsInfo$ = this.apiServices.getVetDetails()
	}

	onSubmite(): void {
		this.paramsArr = []
		this.checkParams()
		let getUrl = this.paramsArr.join('&')
		// this.getAnimalsInfo(getUrl)
	}

	checkParams(): void {
		if (this.vet.title !== '') {
			this.paramsArr.push(`gender=${this.vet.title}`)
		}
		if (this.vet.adress !== '') {
			this.paramsArr.push(`breed=${this.vet.adress}`)
		}
		// if (this.vet.phone !== '') {
		// 	this.paramsArr.push(`age=${this.vet.phone}`)
		// }
		// if (this.vet.email !== '') {
		// 	this.paramsArr.push(`curator=${this.vet.email}`)
		// }
	}

	// getAnimalsInfo(url): void {
	// 	this.vetsFilterInfo$ = this.apiServices.getAnimalsFilterInfo(url)

	// 	this.apiServices.getAnimalsFilterInfo(url).subscribe(item => {
	// 		if (item.length == 0) {
	// 			this.notifierService.showInfoNotification(
	// 				'З такими параметрами, нажаль, нічого немає =(',
	// 				'Ok'
	// 			)
	// 		} else {
	// 			this.notifierService.showSuccessNotification(
	// 				`Ми знайшли для Вас ${item.length} тварин =)`,
	// 				'Ok'
	// 			)
	// 		}
	// 	})
	// }
}

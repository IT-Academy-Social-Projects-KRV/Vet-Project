import { Component } from '@angular/core'
import { VetUnitInfoService } from '@shared/services/vet-unit-info.service'

import { ActivatedRoute } from '@angular/router'
@Component({
	selector: 'app-vet-unit-page',
	templateUrl: './vet-unit-page.component.html',
	styleUrls: ['./vet-unit-page.component.scss']
})
export class VetUnitPageComponent {
	vetsInfo: any = []
	id: string
	info: any = {}
	// eslint-disable-next-line no-unused-vars
	constructor(private vetInfo: VetUnitInfoService, private _Activatedroute: ActivatedRoute) {
		this._Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
		this.vetInfo.getVetsUnitInfo(this.id).subscribe(item => {
			this.vetsInfo = item
			this.info = this.vetsInfo[0]
		})
	}
}

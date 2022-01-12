import { Component, OnInit } from '@angular/core'
import { VetUnitInfoService } from '@shared/services/vet-unit-info.service'
import { ActivatedRoute } from '@angular/router'
@Component({
	selector: 'app-vet-unit-page',
	templateUrl: './vet-unit-page.component.html',
	styleUrls: ['./vet-unit-page.component.scss']
})
export class VetUnitPageComponent implements OnInit {
	vetsInfo: any = []
	id: string
	info: any = {}
	constructor(private vetInfo: VetUnitInfoService, private _Activatedroute: ActivatedRoute) {
		this._Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
		this.vetInfo.getVetsUnitInfo(this.id).subscribe(item => {
			this.vetsInfo = item
			this.info = this.vetsInfo[0]
			console.log(this.info)
		})
	}
	ngOnInit(): void {}
}

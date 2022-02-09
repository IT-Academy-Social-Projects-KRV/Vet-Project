import { Component, Inject, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiServices } from '@shared/services/api.service'
import { ActivatedRoute } from '@angular/router'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	selector: 'app-vet-update-dialog',
	templateUrl: './vet-update-dialog.component.html',
	styleUrls: ['./vet-update-dialog.scss']
})
export class VetUpdateComponent implements OnInit {
	vetsInfo$: Observable<any>
	id: string
	item: IVetsUnitInfo
	constructor(
		private Activatedroute: ActivatedRoute,
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<VetUpdateComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit() {
		this.vetsInfo$ = this.apiServices.getVetsUnitInfo(this.id)
	}

	onUpdateVet(form: IVetsUnitInfo): void {
		this.item = {
			id: form.id,
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}
		this.apiServices.putUpdateVet(this.data).subscribe()
		this.dialogRef.close()
	}

	closeDialog() {
		this.dialogRef.close()
	}
}

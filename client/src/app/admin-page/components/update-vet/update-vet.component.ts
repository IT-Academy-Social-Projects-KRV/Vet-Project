import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { FormControl } from '@angular/forms'
import { map, Observable } from 'rxjs'
import { ApiServices } from '@shared/services/api.service'
import { ActivatedRoute } from '@angular/router'
import { IVetsInfo, IVetServices } from '@shared/interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	selector: 'app-update-vet',
	templateUrl: './update-vet.component.html',
	styleUrls: ['./update-vet.component.scss']
})
export class UpdateVetComponent implements OnInit {
	vetsInfo$: Observable<IVetsUnitInfo>
	id: string
	item: IVetsUnitInfo
	constructor(
		private Activatedroute: ActivatedRoute,
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<UpdateVetComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		this.Activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id')
		})
		this.vetsInfo$ = this.apiServices.getVetsUnitInfo(this.id)
	}

	onUpdateVet(form: IVetsUnitInfo): void {
		this.item = {
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email
		}
		console.log(form)
	}

	closeDialog() {
		this.dialogRef.close()
	}
}

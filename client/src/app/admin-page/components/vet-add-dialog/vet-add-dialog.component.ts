import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-vet-add-dialog',
	templateUrl: './vet-add-dialog.component.html',
	styleUrls: ['./vet-add-dialog.component.scss']
})
export class VetAddDialogComponent {
	constructor(
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<IVetsUnitInfo>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	closeDialog() {
		this.dialogRef.close()
	}

	item: IVetsUnitInfo

	onCreateClinic(form: IVetsUnitInfo): void {
		this.item = {
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}
		// Send Http request
		this.apiServices.postNewClinic(this.item).subscribe()
		this.dialogRef.close()
	}
}

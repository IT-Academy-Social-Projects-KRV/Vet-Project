import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-vet-delete-dialog',
	templateUrl: './vet-delete-dialog.component.html',
	styleUrls: ['./vet-delete-dialog.component.scss']
})
export class VetDeleteDialogComponent {
	constructor(
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<IVetsUnitInfo>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	closeDialog() {
		this.dialogRef.close()
	}

	getVets() {
		this.apiServices.getVetDetails().subscribe()
	}

	onDeleteClinic(form: IVetsUnitInfo): void {
		this.data = { id: form.id }
		this.apiServices.deleteClinic(this.data.id).subscribe()
		this.closeDialog()
	}
}

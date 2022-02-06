import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { ApiServices } from '@shared/services/api.service'
import { NotifierService } from 'src/app/notifier.service'

@Component({
	selector: 'app-vet-add-dialog',
	templateUrl: './vet-add-dialog.component.html',
	styleUrls: ['./vet-add-dialog.component.scss']
})
export class VetAddDialogComponent {
	constructor(
		private apiServices: ApiServices,
		private notifierService: NotifierService,
		public dialogRef: MatDialogRef<IVetsUnitInfo>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	item: IVetsUnitInfo

	public onCreateClinic(form: IVetsUnitInfo): void {
		this.item = {
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}

		this.dialogRef.close()
		this.apiServices.postNewClinic(this.item).subscribe()
		this.notifierService.showSuccessNotification('Клініку успішно додано', 'Ok')
	}
}

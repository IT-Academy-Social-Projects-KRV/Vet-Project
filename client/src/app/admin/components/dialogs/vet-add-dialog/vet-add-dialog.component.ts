import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { ApiServices } from '@shared/services/api.service'
import { NotifierService } from '@shared/services/notifier.service'

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

	testLink = ''
	item: IVetsUnitInfo

	public onCreateClinic(form: IVetsUnitInfo): void {
		this.item = {
			image: this.testLink,
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link,
			animal_type: 'test'
		}
		console.log(this.item)

		this.apiServices.postNewClinic(this.item).subscribe(response => {
			this.dialogRef.close(response)
			this.notifierService.showSuccessNotification('Клініку успішно додано', 'Ok')
		})
	}
	addValue(event) {
		this.testLink = event
	}
}

import { Component, Inject} from '@angular/core'
import { Observable } from 'rxjs'
import { ApiServices } from '@shared/services/api.service'
import { ActivatedRoute } from '@angular/router'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NotifierService } from '@shared/services/notifier.service'

@Component({
	selector: 'app-vet-update-dialog',
	templateUrl: './vet-update-dialog.component.html',
	styleUrls: ['./vet-update-dialog.scss']
})
export class VetUpdateComponent {
	vetsInfo$: Observable<any>
	id: string
	item: IVetsUnitInfo
	constructor(
		private Activatedroute: ActivatedRoute,
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<VetUpdateComponent>,
		private notifierService: NotifierService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	onUpdateVet(form: IVetsUnitInfo): void {
		this.item = {
			id: form.id,
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}
		this.apiServices.putUpdateVet(this.item).subscribe(response => {
			this.dialogRef.close(response)
			this.notifierService.showSuccessNotification('Клініку успішно оновлено', 'Ok')
		})
	}
}

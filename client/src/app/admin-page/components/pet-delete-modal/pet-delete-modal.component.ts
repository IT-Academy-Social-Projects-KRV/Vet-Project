import { Component, Inject } from '@angular/core'
import { AdminEditPetComponent } from '../admin-edit-pet/admin-edit-pet.component'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ApiServices } from '@shared/services/api.service'
import { MatTableDataSource } from '@angular/material/table'

@Component({
	selector: 'app-pet-delete-modal',
	templateUrl: './pet-delete-modal.component.html',
	styleUrls: ['./pet-delete-modal.component.scss']
})
export class PetDeleteModalComponent {
	constructor(
		public dialogRef: MatDialogRef<any>,
		private apiServices: ApiServices,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}
	public confirmMessage: string
}

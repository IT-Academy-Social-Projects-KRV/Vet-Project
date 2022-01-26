import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'

@Component({
	selector: 'app-pet-edit-dialog',
	templateUrl: './pet-edit-dialog.component.html',
	styleUrls: ['./pet-edit-dialog.component.scss']
})
export class PetEditDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<IAnimalsUnitInfo>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	closeDialog() {
		this.dialogRef.close()
	}
}

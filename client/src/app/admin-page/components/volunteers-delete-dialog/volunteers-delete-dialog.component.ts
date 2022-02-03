import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
@Component({
	selector: 'app-volunteers-delete-dialog',
	templateUrl: './volunteers-delete-dialog.component.html',
	styleUrls: ['./volunteers-delete-dialog.component.scss']
})
export class VolunteersDeleteDialogComponent {
	constructor(public dialogRef: MatDialogRef<VolunteersDeleteDialogComponent>) {}
	onCloseDialog() {
		this.dialogRef.close()
	}
}

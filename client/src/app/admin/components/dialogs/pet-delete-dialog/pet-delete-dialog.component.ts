import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
	selector: 'app-pet-delete-dialog',
	templateUrl: './pet-delete-dialog.component.html',
	styleUrls: ['./pet-delete-dialog.component.scss']
})
export class PetDeleteDialogComponent {
	constructor(public dialogRef: MatDialogRef<any>) {}
}

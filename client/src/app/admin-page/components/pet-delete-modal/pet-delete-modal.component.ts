import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
	selector: 'app-pet-delete-modal',
	templateUrl: './pet-delete-modal.component.html',
	styleUrls: ['./pet-delete-modal.component.scss']
})
export class PetDeleteModalComponent {
	constructor(public dialogRef: MatDialogRef<any>) {}
}

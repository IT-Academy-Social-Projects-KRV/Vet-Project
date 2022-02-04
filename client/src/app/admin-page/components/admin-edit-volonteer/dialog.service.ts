import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { VolunteersAddDialogComponent } from '../volunteers-add-dialog/volunteers-add-dialog.component'
import { VolunteersDeleteDialogComponent } from '../volunteers-delete-dialog/volunteers-delete-dialog.component'

@Injectable({
	providedIn: 'root'
})
export class DialogService {
	constructor(private dialog: MatDialog) {}

	openConfirmDialog() {
		return this.dialog.open(VolunteersAddDialogComponent, {
			width: '500px'
			// disableClose: true
		})
	}
	openDeleteDialog() {
		this.dialog.open(VolunteersDeleteDialogComponent, {
			width: '550px'
			// disableClose: true
		})
	}
}

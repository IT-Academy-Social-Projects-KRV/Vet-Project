import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { VolunteersAddDialogComponent } from '../volunteers-add-dialog/volunteers-add-dialog.component'
import { VolunteersDeleteDialogComponent } from '../volunteers-delete-dialog/volunteers-delete-dialog.component'
import { VolunteersService } from './volunteers.service'

@Injectable({
	providedIn: 'root'
})
export class DialogService {
	constructor(private dialog: MatDialog, public service: VolunteersService) {}
	public dialogRef: MatDialogRef<any>
	openConfirmDialog() {
		return this.dialog.open(VolunteersAddDialogComponent, {
			width: '500px',
			disableClose: true
		})
	}
	openDeleteDialog(id) {
		this.dialogRef = this.dialog.open(VolunteersDeleteDialogComponent, {
			width: '550px',
			autoFocus: true,
			disableClose: true
		})
		this.dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.service.deleteVolunteer(id)
			}
			this.dialogRef = null
		})
	}
}

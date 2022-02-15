import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { VolunteersAddDialogComponent } from '../../components/dialogs/volunteers-add-dialog/volunteers-add-dialog.component'
import { VolunteersDeleteDialogComponent } from '../../components/dialogs/volunteers-delete-dialog/volunteers-delete-dialog.component'
import { VolunteersService } from './volunteers.service'
import { ApiServices } from '@shared/services/api.service'

@Injectable({
	providedIn: 'root'
})
export class DialogService {
	constructor(
		private dialog: MatDialog,
		public service: VolunteersService,
		public apiService: ApiServices
	) {}
	public dialogRef: MatDialogRef<any>
	openConfirmDialog() {
		return this.dialog.open(VolunteersAddDialogComponent, {
			width: '500px',
			disableClose: true
		})
	}
	openDeleteDialog(id) {
		return (this.dialogRef = this.dialog.open(VolunteersDeleteDialogComponent, {
			width: '550px',
			autoFocus: true,
			disableClose: true
		}))
	}
}

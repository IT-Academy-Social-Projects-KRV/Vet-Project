import { Component } from '@angular/core'
import { VolunteersService } from '../admin-edit-volonteer/volunteers.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NotifierService } from 'src/app/notifier.service'

@Component({
	selector: 'app-volunteers-add-dialog',
	templateUrl: './volunteers-add-dialog.component.html',
	styleUrls: ['./volunteers-add-dialog.component.scss']
})
export class VolunteersAddDialogComponent {
	constructor(
		public service: VolunteersService,
		public dialogRef: MatDialogRef<VolunteersAddDialogComponent>,
		public notify: NotifierService
	) {}

	onClear() {
		this.service.form.reset()
		this.service.initializeFormGroup()
		this.notify.showInfoNotification('Дані з форми видалено!', 'Ок!')
	}

	onSubmit() {
		if (this.service.form.valid) {
			if (!this.service.form.get('id').value) {
				this.service.insertVolunteer(this.service.form.value)
			} else {
				this.service.updateVolunteer(this.service.form.value)
			}
			this.service.form.reset()
			this.service.initializeFormGroup()
			this.notify.showSuccessNotification('Дані успішно додані!', 'Чудово!')
			this.onClose()
		}
	}
	onClose() {
		this.service.form.reset()
		this.service.initializeFormGroup()
		this.dialogRef.close()
	}
}

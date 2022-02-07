import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { ApiServices } from '@shared/services/api.service'
import { VolunteersService } from '../admin-edit-volonteer/volunteers.service'
import { NotifierService } from '@shared/services/notifier.service'
@Component({
	selector: 'app-volunteers-add-dialog',
	templateUrl: './volunteers-add-dialog.component.html',
	styleUrls: ['./volunteers-add-dialog.component.scss']
})
export class VolunteersAddDialogComponent {
	constructor(
		public service: VolunteersService,
		private apiService: ApiServices,
		private dialogRef: MatDialogRef<VolunteersAddDialogComponent>,
		private notifier: NotifierService
	) {}

	onClear() {
		this.service.form.reset()
		this.service.initializeFormGroup()
		this.notifier.showInfoNotification('Дані з форми видалено!', 'Ок!')
	}

	onSubmit() {
		if (this.service.form.valid) {
			if (!this.service.form.get('id').value) {
				this.apiService
					.postNewVolunteer({
						first_name: this.service.form.value.first_name,
						last_name: this.service.form.value.last_name,
						email: this.service.form.value.email,
						number: this.service.form.value.number
					})
					.subscribe()

				this.notifier.showSuccessNotification('Волонтер успішно доданий', 'OK')
				this.dialogRef.close(this.service.form.value)
				this.service.form.reset()
			} else {
				this.service.updateVolunteer(this.service.form.value)
			}
			this.service.form.reset()
			this.service.initializeFormGroup()
			this.notifier.showSuccessNotification('Дані успішно додані!', 'Чудово!')
			this.onClose()
		}
	}
	onClose() {
		this.service.form.reset()
		this.service.initializeFormGroup()
		this.dialogRef.close()
	}

	closeDialog() {
		this.dialogRef.close()
	}
}

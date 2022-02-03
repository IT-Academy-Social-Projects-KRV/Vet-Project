import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { ApiServices } from '@shared/services/api.service'
import { VolunteersService } from '../admin-edit-volonteer/volunteers.service'
import { NotifierService } from 'src/app/notifier.service'
@Component({
	selector: 'app-volunteers-add-dialog',
	templateUrl: './volunteers-add-dialog.component.html',
	styleUrls: ['./volunteers-add-dialog.component.scss']
})
export class VolunteersAddDialogComponent {
	VolunteerData!: any
	constructor(
		public service: VolunteersService,
		private apiService: ApiServices,
		private dialogRef: MatDialogRef<VolunteersAddDialogComponent>,
		private notifier: NotifierService
	) {}

	onClear() {
		this.service.form.reset()
		this.service.initializeFormGroup()
	}

	closeDialog() {
		this.dialogRef.close()
	}

	onSubmit() {
		this.apiService
			.postNewVolunteer({
				first_name: this.service.form.value.firstName,
				last_name: this.service.form.value.secondName,
				email: this.service.form.value.email,
				number: this.service.form.value.number
			})
			.subscribe()

		this.notifier.showSuccessNotification('Волонтер успішно доданий', 'OK')
		this.dialogRef.close()
	}
}

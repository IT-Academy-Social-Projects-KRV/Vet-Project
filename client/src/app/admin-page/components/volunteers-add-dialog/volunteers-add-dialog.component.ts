import { Component, OnInit } from '@angular/core'
import { VolunteersService } from '../admin-edit-volonteer/volunteers.service'

@Component({
	selector: 'app-volunteers-add-dialog',
	templateUrl: './volunteers-add-dialog.component.html',
	styleUrls: ['./volunteers-add-dialog.component.scss']
})
export class VolunteersAddDialogComponent {
	constructor(public service: VolunteersService) {}

	onClear() {
		this.service.form.reset()
		this.service.initializeFormGroup()
	}
}

import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { LogoutModalComponent } from '../auth/logout-modal/logout-modal.component'

@Component({
	selector: 'app-admin-nav',
	templateUrl: './admin-nav.component.html',
	styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent {
	constructor(public dialog: MatDialog) {}

	openDialog() {
		this.dialog.open(LogoutModalComponent)
	}
}

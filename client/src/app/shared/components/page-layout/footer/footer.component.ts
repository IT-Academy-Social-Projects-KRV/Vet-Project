import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { LoginModalComponent } from 'src/app/admin-page/components/login-modal/login-modal.component'
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	constructor(public dialog: MatDialog) {}
	openDialog() {
		const dialogRef = this.dialog.open(LoginModalComponent)
	}
}

import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { subscribeOn } from 'rxjs'
import { LoginModalComponent } from 'src/app/admin-page/components/login-modal/login-modal.component'
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	constructor(public dialog: MatDialog, private router: Router) {}
	openDialog() {
		const dialogRef = this.dialog.open(LoginModalComponent)
	}
}

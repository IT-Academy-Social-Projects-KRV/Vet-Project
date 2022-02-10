import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { LoginModalComponent } from 'src/app/admin/components/auth/login-modal/login-modal.component'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	faFacebookF = faFacebookF
	faTwitter = faTwitter
	faGithub = faGithub
	faLinkedin = faLinkedin

	constructor(public dialog: MatDialog, private router: Router) {}
	openDialog() {
		const dialogRef = this.dialog.open(LoginModalComponent)
	}
}

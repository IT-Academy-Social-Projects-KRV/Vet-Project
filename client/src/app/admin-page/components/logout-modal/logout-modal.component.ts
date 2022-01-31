import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-logout-modal',
	templateUrl: './logout-modal.component.html',
	styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {
	constructor(private login: ApiServices, private route: Router) {}

	logOut() {
		this.login.logout()
		this.route.navigate([''])
	}
}

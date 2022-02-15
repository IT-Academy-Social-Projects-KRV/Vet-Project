import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../login.service'

@Component({
	selector: 'app-logout-modal',
	templateUrl: './logout-modal.component.html',
	styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {
	constructor(private loginService: LoginService, private route: Router) {}

	logOut() {
		this.loginService.logout()
		this.route.navigate([''])
	}
}

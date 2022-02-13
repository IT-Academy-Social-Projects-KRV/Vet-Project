import { Component, OnInit } from '@angular/core'
import { LoginService } from './admin/auth/login-modal/login.service'
import { StyleManager } from '@shared/services/style-manager.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'client'
	constructor(private loginService: LoginService) {}

	ngOnInit(): void {
		const potentialToken = localStorage.getItem('token')
		if (potentialToken !== null) {
			this.loginService.setToken(potentialToken)
		}
	}
}

import { Component, OnInit } from '@angular/core'
import { LoginService } from './auth/login/login.service'

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

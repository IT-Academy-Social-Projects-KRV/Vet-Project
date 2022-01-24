import { Component, OnInit } from '@angular/core'
import { LoginService } from '@shared/services/login.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'client'
	constructor(private login: LoginService) {
	}
	ngOnInit(): void {
		const potentialToken = localStorage.getItem('token')
		if (potentialToken !== null) {
			this.login.setToken(potentialToken)
		}
	}
}

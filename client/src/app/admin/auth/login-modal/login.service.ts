import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private token
	constructor() {}

	setToken(token: string) {
		this.token = token
	}

	getToken(): string {
		return this.token
	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	logout() {
		this.setToken(null)
		localStorage.clear()
	}
}

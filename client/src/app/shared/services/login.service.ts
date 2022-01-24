import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ILoginUSer } from '@shared/interfaces/login'
import { ApiPaths, baseUrl } from '@shared/path-api'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private token = null

	constructor(private http: HttpClient) {}

	login(user: ILoginUSer): Observable<{ token: string }> {
		return this.http.post<{ token: string }>(`${baseUrl}/${ApiPaths.login}`, user).pipe(
			tap(({ token }) => {
				localStorage.setItem('login-token', token)
				this.setToken(token)
			})
		)
	}

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

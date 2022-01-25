import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, tap } from 'rxjs'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVolonteersInfo } from '../interfaces/volonteers'

import { ApiPaths, baseUrl } from '../path-api'
import { ILoginUSer } from '@shared/interfaces/login'

@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	error = new Subject<string>()
	private token = null

	constructor(private http: HttpClient) {}

	//FILTERS
	getAnimalsFilterInfo(url) {
		return this.http.get<IAnimalsInfo[]>(`${baseUrl}${ApiPaths.filter}${url}`)
	}

	////////////////////////PET////////////////////////
	getAnimalsInfo() {
		return this.http.get<IAnimalsInfo[]>(`${baseUrl}/${ApiPaths.animals}`)
	}

	getAnimalsUnitInfo(id) {
		return this.http.get<IAnimalsUnitInfo>(`${baseUrl}/${ApiPaths.animals}/${id}`)
	}

	////////////////////////VET/////////////////////////
	getVetDetails() {
		return this.http.get<IVetsInfo[]>(`${baseUrl}/${ApiPaths.vets}`)
	}

	getVetsUnitInfo(id) {
		return this.http.get<IVetsUnitInfo[]>(`${baseUrl}/${ApiPaths.vets}/${id}`)
	}

	postNewClinic(item) {
		return this.http.post<{ [key: string]: any }>(`${baseUrl}/${ApiPaths.vets}`, item).subscribe({
			next: responseData => console.log(responseData),
			error: e => console.error(e)
		})
	}

	getVetServices() {
		return this.http.get<IVetServices>(`${baseUrl}/${ApiPaths.services}`)
	}

	/////////////////////VOLONTEERS////////////////////////
	getVolonteersInfo() {
		return this.http.get<IVolonteersInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
	postNewAnimal(item) {
		return this.http
			.post<{ [key: string]: any }>(`${baseUrl}/${ApiPaths.animals}`, item)
			.subscribe({
				next: responseData => console.log(responseData),
				error: e => console.error(e)
			})
	}

	//////////////LOGIN///////////////////////////////////////
	login(user: ILoginUSer): Observable<{ token: string }> {
		return this.http.post<{ token: string }>(`${baseUrl}/${ApiPaths.login}`, user).pipe(
			tap(({ token }) => {
				localStorage.setItem('token', token)
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

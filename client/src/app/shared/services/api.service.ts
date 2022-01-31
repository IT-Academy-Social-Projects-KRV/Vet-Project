import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, Subject, tap, throwError } from 'rxjs'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVolonteersInfo } from '../interfaces/volonteers'

import { catchError } from 'rxjs/operators'

import { ILoginUSer } from '@shared/interfaces/login'

import { UrlBuilder } from '../builder-url'

let builder = new UrlBuilder()
@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	error = new Subject<string>()
	private token = null

	constructor(private http: HttpClient) {}

	//FILTERS

	getAnimalsFilterInfo(url): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(builder.baseUrl().animal().filter(url).getUrl())
	}

	////////////////////////PET////////////////////////

	getAnimalsInfo(): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(builder.baseUrl().animal().getUrl())
	}

	getAnimalsUnitInfo(id): Observable<IAnimalsUnitInfo> {
		return this.http.get<IAnimalsUnitInfo>(builder.baseUrl().animal().addId(id).getUrl())
	}

	postNewAnimal(item) {
		return this.http.post<{ [key: string]: any }>(builder.baseUrl().animal().getUrl(), item)
	}
	putEditAnimal(data) {
		return this.http.put<{ [key: string]: any }>(builder.baseUrl().animal().getUrl(), data)
	}

	////////////////////////VET/////////////////////////

	getVetDetails(): Observable<IVetsInfo[]> {
		return this.http.get<IVetsInfo[]>(builder.baseUrl().vet().getUrl())
	}

	getVetsUnitInfo(id): Observable<IVetsUnitInfo[]> {
		return this.http.get<IVetsUnitInfo[]>(builder.baseUrl().vet().addId(id).getUrl())
	}

	postNewClinic(item) {
		return this.http.post<{ [key: string]: any }>(builder.baseUrl().vet().getUrl(), item)
	}

	getVetServices(): Observable<IVetServices> {
		return this.http.get<IVetServices>(builder.baseUrl().services().getUrl())
	}

	deleteClinic(id) {
		return this.http.delete<IVetsInfo>(builder.baseUrl().vet().addId(id).getUrl())
	}

	/////////////////////VOLONTEERS////////////////////////
	// getVolonteersInfo() {
	// 	return this.http.get<IVolonteersInfo>(`${baseUrl}/${ApiPaths.animals}`)
	// }

	//////////////LOGIN///////////////////////////////////////

	login(user: ILoginUSer): Observable<{ token: string }> {
		return this.http.post<{ token: string }>(builder.baseUrl().login().getUrl(), user).pipe(
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

	// getVolonteersInfo(): Observable<IVolonteersInfo> {
	// 	return this.http.get<IVolonteersInfo>(`${baseUrl}//animals`).pipe(catchError(this.handleError))
	// }
}

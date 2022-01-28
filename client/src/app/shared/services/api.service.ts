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

import { ApiUrlBuilder } from '../api-url-builder'

let apiUrlBuilder = new ApiUrlBuilder()
@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	error = new Subject<string>()
	private token = null

	constructor(private http: HttpClient) {}

	//FILTERS

	getAnimalsFilterInfo(url: any): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(apiUrlBuilder.getAnimalsFilterInfoUrl(url))
	}

	////////////////////////PET////////////////////////

	getAnimalsInfo(): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(apiUrlBuilder.getAnimalsInfoUrl())
	}

	getAnimalsUnitInfo(id: string): Observable<IAnimalsUnitInfo> {
		return this.http.get<IAnimalsUnitInfo>(apiUrlBuilder.getAnimalsUnitInfoUrl(id))
	}

	putEditAnimal(data: any) {
		return this.http.put<{ [key: string]: any }>(apiUrlBuilder.getAnimalsInfoUrl(), data)
	}
	postNewAnimal(item: IAnimalsUnitInfo) {
		return this.http.post<{ [key: string]: any }>(apiUrlBuilder.getAnimalsInfoUrl(), item)
	}

	////////////////////////VET/////////////////////////

	getVetDetails(): Observable<IVetsInfo[]> {
		return this.http.get<IVetsInfo[]>(apiUrlBuilder.getVetDetailsUrl())
	}

	getVetsUnitInfo(id: string): Observable<IVetsUnitInfo[]> {
		return this.http.get<IVetsUnitInfo[]>(apiUrlBuilder.getVetsUnitInfoUrl(id))
	}

	postNewClinic(item: IVetsUnitInfo) {
		return this.http.post<{ [key: string]: any }>(apiUrlBuilder.getVetDetailsUrl(), item)
	}

	getVetServices(): Observable<IVetServices> {
		return this.http.get<IVetServices>(apiUrlBuilder.getVetServicesUrl())
	}

	/////////////////////VOLONTEERS////////////////////////
	// getVolonteersInfo() {
	// 	return this.http.get<IVolonteersInfo>(`${baseUrl}/${ApiPaths.animals}`)
	// }

	//////////////LOGIN///////////////////////////////////////

	login(user: ILoginUSer): Observable<{ token: string }> {
		return this.http.post<{ token: string }>(apiUrlBuilder.getLoginUrl(), user).pipe(
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

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			console.error('An error occurred:', error.error)
		} else {
			console.error(`Backend returned code ${error.status}, body was: `, error.error)
		}

		return throwError('Щось пішло не так; Спробуйте, будь ласка, пізніше. =(')
	}
	// getVolonteersInfo(): Observable<IVolonteersInfo> {
	// 	return this.http.get<IVolonteersInfo>(`${baseUrl}//animals`).pipe(catchError(this.handleError))
	// }
}

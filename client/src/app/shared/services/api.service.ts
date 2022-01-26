import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Subject } from 'rxjs'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVolonteersInfo } from '../interfaces/volonteers'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { baseUrl } from '../path-api'

@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	error = new Subject<string>()

	constructor(private http: HttpClient) {}

	//FILTERS
	getAnimalsFilterInfo(url): Observable<IAnimalsInfo[]> {
		return this.http
			.get<IAnimalsInfo[]>(`${baseUrl}//animals/filter//?${url}`)
			.pipe(catchError(this.handleError))
	}

	////////////////////////PET////////////////////////
	getAnimalsInfo(): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(`${baseUrl}//animals`).pipe(catchError(this.handleError))
	}

	getAnimalsUnitInfo(id): Observable<IAnimalsUnitInfo> {
		return this.http
			.get<IAnimalsUnitInfo>(`${baseUrl}//animals/${id}`)
			.pipe(catchError(this.handleError))
	}

	postNewAnimal(item) {
		return this.http.post<{ [key: string]: any }>(`${baseUrl}//animals`, item).subscribe({
			next: responseData => console.log(responseData),
			error: e => console.error(e)
		})
	}

	////////////////////////VET/////////////////////////
	getVetDetails(): Observable<IVetsInfo[]> {
		return this.http.get<IVetsInfo[]>(`${baseUrl}//vet`).pipe(catchError(this.handleError))
	}

	getVetsUnitInfo(id): Observable<IVetsUnitInfo[]> {
		return this.http
			.get<IVetsUnitInfo[]>(`${baseUrl}//vet/${id}`)
			.pipe(catchError(this.handleError))
	}

	postNewClinic(item) {
		return this.http.post<{ [key: string]: any }>(`${baseUrl}//vet`, item).subscribe({
			next: responseData => console.log(responseData),
			error: e => console.error(e)
		})
	}

	getVetServices(): Observable<IVetServices> {
		return this.http.get<IVetServices>(`${baseUrl}//services`).pipe(catchError(this.handleError))
	}

	/////////////////////VOLONTEERS////////////////////////
	getVolonteersInfo(): Observable<IVolonteersInfo> {
		return this.http.get<IVolonteersInfo>(`${baseUrl}/s/animals`).pipe(catchError(this.handleError))
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			console.error('An error occurred:', error.error)
		} else {
			console.error(`Backend returned code ${error.status}, body was: `, error.error)
		}

		return throwError('Щось пішло не так; Спробуйте, будь ласка, пізніше. =(')
	}
}

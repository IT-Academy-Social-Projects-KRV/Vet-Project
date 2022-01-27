import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVolonteersInfo } from '../interfaces/volonteers'
import { Observable, throwError, map } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { ApiUrlBuilder } from '../api-url-builder'

let apiUrlBuilder = new ApiUrlBuilder()
@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	constructor(private http: HttpClient) {}

	//FILTERS

	getAnimalsFilterInfo(url): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(apiUrlBuilder.getAnimalsFilterInfoUrl(url))
	}

	////////////////////////PET////////////////////////

	getAnimalsInfo(): Observable<IAnimalsInfo[]> {
		return this.http.get<IAnimalsInfo[]>(apiUrlBuilder.getAnimalsInfoUrl())
	}

	getAnimalsUnitInfo(id): Observable<IAnimalsUnitInfo> {
		return this.http.get<IAnimalsUnitInfo>(apiUrlBuilder.getAnimalsUnitInfoUrl(id))
	}

	postNewAnimal(item) {
		return this.http.post<{ [key: string]: any }>(apiUrlBuilder.getAnimalsInfoUrl(), item)
	}
	putEditAnimal(data) {
		return this.http.put<{ [key: string]: any }>(apiUrlBuilder.getAnimalsInfoUrl(), data)
	}

	////////////////////////VET/////////////////////////

	getVetDetails(): Observable<IVetsInfo[]> {
		return this.http.get<IVetsInfo[]>(apiUrlBuilder.getVetDetailsUrl())
	}

	getVetsUnitInfo(id): Observable<IVetsUnitInfo[]> {
		return this.http.get<IVetsUnitInfo[]>(apiUrlBuilder.getVetsUnitInfoUrl(id))
	}

	postNewClinic(item) {
		return this.http.post<{ [key: string]: any }>(apiUrlBuilder.getVetDetailsUrl(), item)
	}

	getVetServices(): Observable<IVetServices> {
		return this.http.get<IVetServices>(apiUrlBuilder.getVetServicesUrl())
	}

	/////////////////////VOLONTEERS////////////////////////
	// getVolonteersInfo(): Observable<IVolonteersInfo> {
	// 	return this.http.get<IVolonteersInfo>(`${baseUrl}//animals`).pipe(catchError(this.handleError))
	// }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'

import { Observable } from 'rxjs'


import { ApiUrlBuilder } from '../api-url-builder'
import { UrlBuilder } from '../services/builder-url'

let apiUrlBuilder = new ApiUrlBuilder()
let builder = new UrlBuilder()
@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	constructor(private http: HttpClient) {}

	//FILTERS

	getAnimalsFilterInfo(url): Observable<IAnimalsInfo[]> {
		let t = apiUrlBuilder.getAnimalsFilterInfoUrl(url)
		console.log(t)
		return this.http.get<IAnimalsInfo[]>(t)
	}

	////////////////////////PET////////////////////////

	getAnimalsInfo(): Observable<IAnimalsInfo[]> {
		let test = builder.baseUrl().animal().getUrl()
		console.log(test)
		return this.http.get<IAnimalsInfo[]>(test)
	}

	// getAnimalsUnitInfo(id): Observable<IAnimalsUnitInfo> {
	// 	return this.http.get<IAnimalsUnitInfo>(apiUrlBuilder.getAnimalsUnitInfoUrl(id))
	// }
	getAnimalsUnitInfo(id): Observable<IAnimalsUnitInfo> {
		let testUrl = builder.baseUrl().animal().addId(id).getUrl()
		console.log(testUrl)
		return this.http.get<IAnimalsUnitInfo>(testUrl)
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

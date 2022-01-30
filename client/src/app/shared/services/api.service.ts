import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVolonteersInfo } from '../interfaces/volonteers'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { UrlBuilder } from '../builder-url'

let builder = new UrlBuilder()
@Injectable({
	providedIn: 'root'
})
export class ApiServices {
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
	// getVolonteersInfo(): Observable<IVolonteersInfo> {
	// 	return this.http.get<IVolonteersInfo>(`${baseUrl}//animals`).pipe(catchError(this.handleError))
	// }
}

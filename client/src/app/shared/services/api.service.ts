import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject, of, throwError } from 'rxjs'

import { IAnimalsInfo } from '../interfaces/animals'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'
import { IVetServices, IVetsInfo } from '../interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVolonteersInfo } from '../interfaces/volonteers'

import { ApiPaths, baseUrl } from '../path-api'

@Injectable({
	providedIn: 'root'
})
export class ApiServices {
	error = new Subject<string>()

	constructor(private http: HttpClient) {}

	getAnimalsFilterInfo(url) {
		return this.http.get<IAnimalsInfo>(`${baseUrl}${ApiPaths.filter}${url}`)
	}
	getAnimalsInfo() {
		return this.http.get<IAnimalsInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
	getAnimalsUnitInfo(id) {
		return this.http.get<IAnimalsUnitInfo>(`${baseUrl}/${ApiPaths.animals}/${id}`)
	}
	getVetDetails() {
		return this.http.get(`${baseUrl}/${ApiPaths.vets}`)
	}
	getVetsUnitInfo(id) {
		return this.http.get<IVetsUnitInfo>(`${baseUrl}/${ApiPaths.vets}/${id}`)
	}
	postNewClinic(title: string, adress: string, phone: string, email: string, map_link: string) {
		const postData: IVetsUnitInfo = {
			title: title,
			adress: adress,
			phone: phone,
			email: email,
			map_link: map_link
		}
		return this.http.post<{ name: string }>(`${baseUrl}/${ApiPaths.vets}`, postData).subscribe({
			next: responseData => console.log(responseData),
			error: e => console.error(e)
		})
	}
	getVetServices() {
		return this.http.get<IVetServices>(`${baseUrl}/${ApiPaths.services}`)
	}
	getVolonteersInfo() {
		return this.http.get<IVolonteersInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
}

function responseData(
	next: any,
	responseData: any,
	arg2: undefined,
	arg3: void,
	error: Subject<string>,
	arg5: (error: any) => any
) {
	throw new Error('Function not implemented.')
}

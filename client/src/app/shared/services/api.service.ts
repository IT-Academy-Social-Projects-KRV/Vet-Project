/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

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
    constructor(private http: HttpClient) { }
    
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
	getVetServices() {
		return this.http.get<IVetServices>(`${baseUrl}/${ApiPaths.services}`)
    }
    getVolonteersInfo() {
		return this.http.get<IVolonteersInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
}

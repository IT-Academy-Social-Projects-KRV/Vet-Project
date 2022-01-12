/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ApiPaths, baseUrl } from '../path-api'
import { IAnimalsUnitInfo } from '../interfaces/animals-unit'

@Injectable({
	providedIn: 'root'
})
export class AnimalUnitInfoService {
	constructor(private http: HttpClient) {}
	getAnimalsUnitInfo(id) {
		return this.http.get<IAnimalsUnitInfo>(`${baseUrl}/${ApiPaths.animals}/${id}`)
	}
}

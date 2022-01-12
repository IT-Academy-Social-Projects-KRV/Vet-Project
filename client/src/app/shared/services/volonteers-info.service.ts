/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IVolonteersInfo } from '../interfaces/volonteers'
import { ApiPaths, baseUrl } from '../path-api'

@Injectable({
	providedIn: 'root'
})
export class VolonteersInfoService {
	constructor(private http: HttpClient) {}

	getVolonteersInfo() {
		return this.http.get<IVolonteersInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
}

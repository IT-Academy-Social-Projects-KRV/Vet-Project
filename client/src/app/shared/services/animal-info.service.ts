import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IAnimalsInfo } from '../interfaces/animals'
import { ApiPaths, baseUrl } from '../path-api'

@Injectable({
	providedIn: 'root'
})
export class AnimalInfoService {
	// eslint-disable-next-line no-unused-vars
	constructor(private http: HttpClient) {}

	getAnimalsInfo() {
		return this.http.get<IAnimalsInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
}

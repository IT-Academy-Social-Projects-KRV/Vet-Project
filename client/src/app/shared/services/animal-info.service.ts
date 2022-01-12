import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IAnimalsInfo } from '../interfaces/animals'
import { ApiPaths, baseUrl } from '../path-api'

@Injectable({
	providedIn: 'root'
})
export class AnimalInfoService {
	constructor(private http: HttpClient) {}

	getAnimalsInfo() {
		return this.http.get<IAnimalsInfo>(`${baseUrl}/${ApiPaths.animals}`)
	}
}

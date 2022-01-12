import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { baseUrl, ApiPaths } from '../path-api'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
@Injectable({
	providedIn: 'root'
})
export class VetUnitInfoService {
	constructor(private http: HttpClient) {}
	getVetsUnitInfo(id) {
		return this.http.get<IVetsUnitInfo>(`${baseUrl}/${ApiPaths.vets}/${id}`)
	}
}

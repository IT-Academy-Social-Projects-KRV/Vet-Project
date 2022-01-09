import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit';
import { baseUrl, ApiPaths } from '@shared/path-api';


@Injectable({
  providedIn: 'root'
})
export class VetUnitInfoService {
  constructor( private http: HttpClient ) {}
    getVetsUnitInfo(id) {
      return this.http.get<IVetsUnitInfo>(`${baseUrl}/${ApiPaths.vets}/${id}`)
    }
}

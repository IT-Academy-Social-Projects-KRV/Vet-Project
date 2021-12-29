import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVetsInfo, IVetServices } from '../interfaces/vetInfo';
import { baseUrl, ApiPaths } from '../path-api'; 

@Injectable({
  providedIn: 'root',
})
export class VetInfoService {
  private url = baseUrl

  constructor(private http: HttpClient) {}

  getVetDetails() {
    return this.http.get<IVetsInfo>(`${this.url}/${ApiPaths.vets}`);
  }
  getVetServices() {
    return this.http.get<IVetServices>(`${this.url}/${ApiPaths.services}`);
  }
}

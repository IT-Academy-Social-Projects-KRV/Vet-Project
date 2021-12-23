import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVetsInfo, IVetServices } from '../../interfaces/vetInfo';
import { ApiPaths, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VetInfoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVetDetails() {
    return this.http.get<IVetsInfo>(`${this.baseUrl}/${ApiPaths.vets}`);
  }
  getVetServices() {
    return this.http.get<IVetServices>(`${this.baseUrl}/${ApiPaths.services}`);
  }
}

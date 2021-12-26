import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnimalsInfo } from '../../interfaces/animals';
import { ApiPaths, environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalInfoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAnimalsInfo() {
    return this.http.get<IAnimalsInfo>(`${this.baseUrl}/${ApiPaths.animals}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVetsInfo, IVetServices } from '../../interfaces/vetInfo';
import { ApiPaths, environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VetInfoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVetDetails() {
    return this.http.get<IVetsInfo>(`${this.baseUrl}/${ApiPaths.vets}`).pipe(
      map((vetDetails) => {
        return vetDetails;
      })
    );
  }
  getVetServices() {
    return this.http
      .get<IVetServices>(`${this.baseUrl}/${ApiPaths.services}`)
      .pipe(
        map((vetServices) => {
          return vetServices;
        })
      );
  }
}

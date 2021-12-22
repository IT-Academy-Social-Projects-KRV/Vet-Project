import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVetsInfo, IVetServices } from '../../interfaces/vetInfo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VetInfoService {
  private vetDetailsUrl = 'http://localhost:3200/api/vet';
  private vetServicesUrl = 'http://localhost:3200/api/services';

  constructor(private http: HttpClient) {}

  getVetDetails() {
    return this.http.get<IVetsInfo>(this.vetDetailsUrl).pipe(
      map((vetDetails) => {
        return vetDetails;
      })
    );
  }
  getVetServices() {
    return this.http.get<IVetServices>(this.vetServicesUrl).pipe(
      map((vetServices) => {
        return vetServices;
      })
    );
  }
}

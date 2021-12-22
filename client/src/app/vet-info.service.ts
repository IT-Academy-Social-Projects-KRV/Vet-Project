import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VetsInfo, VetServices } from './interfaces/vetInfo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VetInfoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private vetDetailsUrl = 'http://localhost:3200/api/vet';
  private veServicesUrl = 'http://localhost:3200/api/services';

  constructor(private http: HttpClient) {}

  getVetDetails() {
    return this.http.get<VetsInfo>(this.vetDetailsUrl).pipe(
      map((vetDetails) => {
        return vetDetails;
      })
    );
  }
  getVetServices() {
    return this.http.get<VetServices>(this.veServicesUrl).pipe(
      map((vetServices) => {
        return vetServices;
      })
    );
  }
}

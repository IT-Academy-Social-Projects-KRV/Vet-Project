import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnimalsInfo } from 'src/app/interfaces/animals';
import { ApiPaths, environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalInfoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAnimalsInfo() {
    return this.http
      .get<IAnimalsInfo>(`${this.baseUrl}/${ApiPaths.animals}`)
      .pipe(
        map((vetDetails) => {
          return vetDetails;
        })
      );
  }
}

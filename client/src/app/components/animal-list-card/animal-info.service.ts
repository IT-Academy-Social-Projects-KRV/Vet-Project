import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnimalsInfo } from 'src/app/interfaces/animals';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalInfoService {
  private animalsUrl = 'http://localhost:3200/api/animals';
  constructor(private http: HttpClient) {}

  getAnimalsInfo() {
    return this.http.get<IAnimalsInfo>(this.animalsUrl).pipe(
      map((vetDetails) => {
        return vetDetails;
      })
    );
  }
}

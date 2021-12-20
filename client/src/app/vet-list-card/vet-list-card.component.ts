import { Component, OnInit } from '@angular/core';
import { VetsInfo, VetServices } from '../interfaces/vetInfo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vet-list-card',
  templateUrl: './vet-list-card.component.html',
  styleUrls: ['./vet-list-card.component.scss'],
})
export class VetListCardComponent implements OnInit {
  vetDetailInfo: VetsInfo[];
  vetServices: VetServices[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchVets();
    this.fetchServices();
  }

  private fetchVets() {
    this.http
      .get<any>('http://localhost:3200/api/vet')
      .subscribe((response) => {
        this.vetDetailInfo = response;
        console.log(response);
      });
  }
  private fetchServices() {
    this.http
      .get<any>('http://localhost:3200/api/services')
      .subscribe((response) => {
        this.vetServices = response;
        console.log(response);
      });
  }
}

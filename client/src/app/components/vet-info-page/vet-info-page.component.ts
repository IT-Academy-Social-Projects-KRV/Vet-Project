import { Component, OnInit } from '@angular/core';
import { VetsInfo } from 'src/app/interfaces/vetInfo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vet-info-page',
  templateUrl: './vet-info-page.component.html',
  styleUrls: ['./vet-info-page.component.scss'],
})
export class VetInfoPageComponent implements OnInit {
  vetDetailInfo: VetsInfo[];
  vetServices: any[];
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

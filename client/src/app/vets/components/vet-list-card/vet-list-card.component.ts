import { Component, OnInit } from '@angular/core';
import { VetInfoService } from '../../shared/vet-info.service';

@Component({
  selector: 'app-vet-list-card',
  templateUrl: './vet-list-card.component.html',
  styleUrls: ['./vet-list-card.component.scss'],
})
export class VetListCardComponent implements OnInit {
  vetsDetailInfo: any = [];
  vetsServices: any = [];
  constructor(
    private vetDetailInfo: VetInfoService,
    private vetServices: VetInfoService
  ) {
    this.vetDetailInfo.getVetDetails().subscribe((item) => {
      this.vetsDetailInfo = item;
    });
    this.vetServices.getVetServices().subscribe((item) => {
      this.vetsServices = item;
    });
  }
  ngOnInit(): void {}
}

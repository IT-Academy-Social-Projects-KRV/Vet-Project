import { Component, OnInit,Input } from '@angular/core';
import { VetInfoService } from '@shared/services/vet-info.service';


@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
@Input()
vetsDetailInfo:any  = []
vetsServices:any = []
  constructor(private vetDetailInfo: VetInfoService, private vetServices: VetInfoService) { 
    this.vetDetailInfo.getVetDetails().subscribe(item => {
			this.vetsDetailInfo = item
		})
		this.vetServices.getVetServices().subscribe(item => {
			this.vetsServices = item
		})
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input } from '@angular/core';
import { IVetServices } from '@shared/interfaces/vetInfo';


@Component({
  selector: 'app-vet-card-services',
  templateUrl: './vet-card-services.component.html',
  styleUrls: ['./vet-card-services.component.scss']
})
export class VetCardServicesComponent implements OnInit {
 @Input()
 vetCardServices:IVetServices = {
   description:'',
   id:1,
   title:''
 }
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}

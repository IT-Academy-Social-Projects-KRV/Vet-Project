import { Component, OnInit,Input } from '@angular/core'
import { IVetsInfo } from '@shared/interfaces/vetInfo'

@Component({
	selector: 'app-vet-list-card',
	templateUrl: './vet-list-card.component.html',
	styleUrls: ['./vet-list-card.component.scss', '../page-layout/header/header.component.scss']
})
export class VetListCardComponent implements OnInit {
	@Input()
	vetsInfo:IVetsInfo = {
		id:1,
		title:'',
		adress:'',
		phone:'',
		email:'',
		map_link:''
	}
	
	constructor() {
		
	}
	ngOnInit(): void {}
}

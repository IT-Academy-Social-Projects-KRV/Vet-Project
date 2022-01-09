import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor() {}
	active: boolean = false;
	hide: boolean = false;
	clickEvent(){
    this.active = !this.active;
		this.hide = !this.hide
     
	}
	ngOnInit(): void {}
}


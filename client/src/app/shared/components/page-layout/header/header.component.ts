import { Component, OnInit, Output } from '@angular/core'
import {} from '@angular/core'
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor() {}
	active: boolean = false

	clickEvent() {
		this.active = !this.active
		document.body.style.overflow = this.active ? 'hidden' : 'visible'
	}
	resetBurger() {
		this.active = false
		document.body.style.overflow = this.active ? 'hidden' : 'visible'
	}

	ngOnInit(): void {}
}

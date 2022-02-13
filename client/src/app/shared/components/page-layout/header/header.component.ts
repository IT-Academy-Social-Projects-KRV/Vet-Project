/* eslint-disable no-undef */
import { Component, Input } from '@angular/core'
import { StyleManager } from '@shared/services/style-manager.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	iconChange = this.styleManager.iconChange
	isDark = this.styleManager.isDark
	constructor(private styleManager: StyleManager) {}
	toggleDarkTheme() {
		this.styleManager.detectColorScheme()
		this.styleManager.toggleDarkTheme()
		this.iconChange = !this.iconChange
		this.isDark = !this.isDark
	}

	active: boolean = false

	clickEvent() {
		this.active = !this.active
		document.body.style.overflow = this.active ? 'hidden' : 'visible'
	}
	resetBurger() {
		this.active = false
		document.body.style.overflow = this.active ? 'hidden' : 'visible'
	}
}

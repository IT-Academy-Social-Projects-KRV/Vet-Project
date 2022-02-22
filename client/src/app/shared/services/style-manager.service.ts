import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class StyleManager {
	public iconChange: boolean
	public isDark: boolean
	detectColorScheme() {
		const defaultIcon = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (defaultIcon) {
			this.iconChange = defaultIcon
		}
	}

	constructor() {
		this.detectColorScheme()
	}
	toggleDarkTheme(): void {
		if (this.isDark) {
			document.body.classList.remove('light-theme')
			this.isDark = false
		} else {
			document.body.classList.add('light-theme')
			this.isDark = true
		}
	}
}

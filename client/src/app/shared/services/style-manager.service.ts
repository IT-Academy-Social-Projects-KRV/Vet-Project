import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class StyleManager {
	public isDark: boolean
	detectColorScheme() {
		let defaultIcon = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (defaultIcon) this.isDark = defaultIcon
	}
	constructor() {
		this.detectColorScheme()
	}
}

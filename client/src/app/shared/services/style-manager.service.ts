import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class StyleManager {
	public iconChange: boolean
	isDark
	detectColorScheme() {
		let dark = '(prefers-color-scheme: dark)'
		let defaultIcon = window.matchMedia(`${dark}`).matches
		if (defaultIcon) this.iconChange = defaultIcon
	}

	constructor() {
		this.detectColorScheme()
	}
	toggleDarkTheme() {
		if (this.isDark) {
			this.removeStyle('light-theme')
			document.body.classList.remove('light-theme')
			this.isDark = false
		} else {
			const href = 'light-theme.css'
			getLinkElementForKey('light-theme').setAttribute('href', href)
			document.body.classList.add('light-theme')
			this.isDark = true
		}
	}
	removeStyle(key: string) {
		const existingLinkElement = getExistingLinkElementByKey(key)
		if (existingLinkElement) {
			document.head.removeChild(existingLinkElement)
		}
	}
}
function getLinkElementForKey(key: string) {
	return getExistingLinkElementByKey(key) || createLinkElementWithKey(key)
}

function getExistingLinkElementByKey(key: string) {
	return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`)
}

function createLinkElementWithKey(key: string) {
	const linkEl = document.createElement('link')
	linkEl.setAttribute('rel', 'stylesheet')
	linkEl.classList.add(getClassNameForKey(key))
	document.head.appendChild(linkEl)
	return linkEl
}

function getClassNameForKey(key: string) {
	return `style-manager-${key}`
}

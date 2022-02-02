export class UrlBuilder {
	constructor() {
		this.reset()
	}
	private url: string

	baseUrl() {
		this.url += 'http://localhost:3200/api'
		return this
	}
	animal() {
		this.url += '/animals'
		return this
	}
	filter(url) {
		this.url += `/filter//?${url}`
		return this
	}
	vet() {
		this.url += '/vet'
		return this
	}
	addId(id: number) {
		this.url += `/${id}`
		return this
	}
	services() {
		this.url += '/services'
		return this
	}
	login() {
		this.url += '/login'
		return this
	}
	volonteers() {
		this.url += '/volunteers'
		return this
	}
	getUrl() {
		let result = this.url
		this.reset()
		return result
	}
	reset() {
		this.url = ''
	}
}

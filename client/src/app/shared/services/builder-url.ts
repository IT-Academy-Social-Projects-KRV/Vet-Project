export class UrlBuilder {
	// private readonly baseUrl: string = 'http://localhost:3200/api'

	// getAnimalsFilterInfoUrl(url) {
	// 	return `${this.baseUrl}/animals/filter//?${url}`
	// }
	// getAnimalsInfoUrl() {
	// 	return `${this.baseUrl}/animals`
	// }
	// getAnimalsUnitInfoUrl(id) {
	// 	return `${this.baseUrl}/animals/${id}`
	// }
	// getVetDetailsUrl() {
	// 	return `${this.baseUrl}/vet`
	// }
	// getVetsUnitInfoUrl(id) {
	// 	return `${this.baseUrl}/vet/${id}`
	// }
	// getVetServicesUrl() {
	// 	return `${this.baseUrl}/services`
	// }
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
	vet() {
		this.url += '/vet'
		return this
	}
	addId(id: number) {
		this.url += `/${id}`
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

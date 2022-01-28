export class ApiUrlBuilder {
	private readonly baseUrl: string = 'http://localhost:3200/api'

	getAnimalsFilterInfoUrl(url) {
		return `${this.baseUrl}/animals/filter//?${url}`
	}
	getAnimalsInfoUrl() {
		return `${this.baseUrl}/animals`
	}
	getAnimalsUnitInfoUrl(id) {
		return `${this.baseUrl}/animals/${id}`
	}
	getVetDetailsUrl() {
		return `${this.baseUrl}/vet`
	}
	getVetsUnitInfoUrl(id) {
		return `${this.baseUrl}/vet/${id}`
	}
	getVetServicesUrl() {
		return `${this.baseUrl}/services`
	}
	getLoginUrl() {
		return `${this.baseUrl}/login`
	}
}

import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class UploaderService {
	getUrl$: Observable<any>
	private getUrlSubject = new Subject<any>()

	constructor() {
		this.getUrl$ = this.getUrlSubject.asObservable()
	}

	getUrl(data) {
		console.log(data)
		this.getUrlSubject.next(data)
	}
}

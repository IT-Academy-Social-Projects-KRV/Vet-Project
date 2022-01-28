import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs'
import { NotifierService } from './notifier.service'

@Injectable()
export class ErrorHttpInterseptor implements HttpInterceptor {
	constructor(private notifierService: NotifierService) {}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			console.error('An error occurred:', error.error)
		} else {
			console.error(`Backend returned code ${error.status}, body was: `, error.error)
		}
		// this.notifierService.showNotification()
		return throwError('Щось пішло не так; Спробуйте, будь ласка, пізніше. =(')
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		next.handle(req).pipe(
			catchError(err => {
				console.log('Handling error locally and rethrowing it...', err)
				return throwError(err)
			})
		)

		return next.handle(req).pipe(catchError(this.handleError))
	}
}

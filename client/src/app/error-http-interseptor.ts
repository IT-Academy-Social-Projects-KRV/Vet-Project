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
		return throwError('Щось пішло не так; Спробуйте, будь ласка, пізніше. =(')
	}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				this.notifierService.showErrorNotification('Щось пішло не так, спробуйте пізніше.', 'Ok')
				return this.handleError(error)
			})
		)
	}
}

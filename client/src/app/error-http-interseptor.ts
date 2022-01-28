import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, retry, throwError } from 'rxjs'

@Injectable()
export class ErrorHttpInterseptor implements HttpInterceptor {
	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			console.error('An error occurred:', error.error)
		} else {
			console.error(`Backend returned code ${error.status}, body was: `, error.error)
		}
		return throwError('Щось пішло не так; Спробуйте, будь ласка, пізніше. =(')
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(retry(2), catchError(this.handleError))
	}
}

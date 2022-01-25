import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
	constructor(private login: ApiServices) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.login.isAuthenticated()) {
			req = req.clone({
				setHeaders: {
					Authorization: this.login.getToken()
				}
			})
		}
		return next.handle(req)
	}
}

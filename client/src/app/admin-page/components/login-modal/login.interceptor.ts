import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "@shared/services/login.service";
import { Observable } from "rxjs";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
	constructor(private login: LoginService) {
		
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if(this.login.isAuthenticated()) {
			req = req.clone({
				setHeaders: {
					Authorization: this.login.getToken()
				}
			})
		}
		return next.handle(req)
		
	}
}
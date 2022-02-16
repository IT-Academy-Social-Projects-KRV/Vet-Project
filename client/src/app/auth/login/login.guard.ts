import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	Router,
	RouterStateSnapshot
} from '@angular/router'
import { Observable, of } from 'rxjs'
import { LoginService } from './login.service'
@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {
	constructor(private loginService: LoginService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		if (this.loginService.isAuthenticated()) {
			return of(true)
		} else {
			this.router.navigate([''])
		}
		return of(false)
	}
	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.canActivate(route, state)
	}
}

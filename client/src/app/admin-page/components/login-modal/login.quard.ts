import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router'
import { ApiServices } from '@shared/services/api.service'
import { Observable, of } from 'rxjs'
@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {
	constructor(private login: ApiServices, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		if (this.login.isAuthenticated()) {
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

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "@shared/services/login.service";
import { Observable, of } from "rxjs";
@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {
	constructor (private login: LoginService, private router:Router){}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
		console.log(route)
		console.log(state.url)
		if(this.login.isAuthenticated()) {
			return of(true)
		} else {
			this.router.navigate([''])
		}
		return of(false)
		
	}
	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
		return this.canActivate(route, state)
	}
}
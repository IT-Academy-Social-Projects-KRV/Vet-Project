import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { ErrorHttpInterseptor } from './error-http-interseptor'
import { LoginInterceptor } from './admin-page/components/login-modal/login.interceptor'

export const httpInterceptorProviders = [
	{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
	{ provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterseptor, multi: true }
]

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from '@shared/components/page-layout/header/header.component'
import { FooterComponent } from '@shared/components/page-layout/footer/footer.component'

import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginInterceptor } from './auth/login/login.interceptor'
import { ErrorHttpInterseptor } from './error-http-interseptor'
import { LoadingInterceptor } from '@shared/services/loading.interceptor'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatIconModule } from '@angular/material/icon'
import { SharedModule } from '@shared/shared.module'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule,
		MatButtonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatSnackBarModule,
		MatIconModule,
		FontAwesomeModule,
		FormsModule,
		SharedModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: LoginInterceptor
		},
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: ErrorHttpInterseptor
		},
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: LoadingInterceptor
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}

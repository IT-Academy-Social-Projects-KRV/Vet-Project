import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from '@shared/components/page-layout/header/header.component'
import { FooterComponent } from '@shared/components/page-layout/footer/footer.component'

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginInterceptor } from './auth/login/login.interceptor'
import { ErrorHttpInterseptor } from './error-http-interseptor'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatIconModule } from '@angular/material/icon'
import { DropzoneDirective } from './dropzone.directive'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'

const config = {
	apiKey: 'AIzaSyC2kjnvpOr_PiDNqopYV6HfF1Upd58jD_o',
	authDomain: 'vetspets-c64ea.firebaseapp.com',
	databaseURL: 'https://vetspets-c64ea-default-rtdb.firebaseio.com',
	projectId: 'vetspets-c64ea',
	storageBucket: 'vetspets-c64ea.appspot.com',
	messagingSenderId: '48146368460',
	appId: '1:48146368460:web:0d4821d9fbb0ccad75ff69',
	measurementId: 'G-QMG0KCSWF9'
}

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, DropzoneDirective],
	imports: [
		BrowserModule,
		MatButtonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatDialogModule,
		MatCardModule,
		MatSnackBarModule,
		MatIconModule,
		FontAwesomeModule,
		AngularFireModule.initializeApp(config),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule
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
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}

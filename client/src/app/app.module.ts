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
import { ErrorHttpInterseptor } from './error-http-interseptor'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule,
		MatButtonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatDialogModule,
		MatCardModule,
		MatSnackBarModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHttpInterseptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from '@shared/components/page-layout/header/header.component'
import { FooterComponent } from '@shared/components/page-layout/footer/footer.component'
import { LoginModalComponent } from '@shared/components/login-modal/login-modal.component'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, LoginModalComponent],
	imports: [
		BrowserModule,
		MatButtonModule,
		MatIconModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatDialogModule,
		MatCardModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

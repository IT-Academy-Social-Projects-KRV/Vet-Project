import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './shared/components/page-layout/header/header.component'
import { FooterComponent } from './shared/components/page-layout/footer/footer.component'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule,
		MatButtonModule,
		MatIconModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

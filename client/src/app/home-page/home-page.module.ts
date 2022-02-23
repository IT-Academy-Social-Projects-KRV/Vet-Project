import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HomePageRoutingModule } from './home-page-routing.module'
import { HomeMainComponent } from './components/home-main/home-main.component'
import { PetSliderComponent } from './components/pet-slider/pet-slider.component'
import { VetSliderComponent } from './components/vet-slider/vet-slider.component'
import { HomeDonateComponent } from './components/home-donate/home-donate.component'
import { HomeAboutComponent } from './components/home-about/home-about.component'
// import { HomeNewsComponent } from './components/home-news/home-news.component'
import { FormsModule } from '@angular/forms'

import { HomePageComponent } from './pages/home-page.component'
import { PetServicesComponent } from './components/pet-services/pet-services.component'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { PetsModule } from '../pets/pets.module'
import { VetsModule } from '../vets/vets.module'

@NgModule({
	declarations: [
		HomeMainComponent,
		PetSliderComponent,
		VetSliderComponent,
		HomeDonateComponent,
		HomeAboutComponent,
		// HomeNewsComponent,
		HomePageComponent,
		PetServicesComponent
	],
	imports: [
		CommonModule,
		HomePageRoutingModule,
		MatDividerModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		FormsModule,
		IvyCarouselModule,
		PetsModule,
		VetsModule,
		MatSnackBarModule
	]
})
export class HomePageModule {}

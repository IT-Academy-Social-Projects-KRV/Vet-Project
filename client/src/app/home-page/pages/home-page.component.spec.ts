/* eslint-disable no-undef */
import { Overlay } from '@angular/cdk/overlay'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HomeAboutComponent } from '../components/home-about/home-about.component'
import { HomeDonateComponent } from '../components/home-donate/home-donate.component'
import { HomeMainComponent } from '../components/home-main/home-main.component'
import { HomeNewsComponent } from '../components/home-news/home-news.component'
import { PetServicesComponent } from '../components/pet-services/pet-services.component'
import { PetSliderComponent } from '../components/pet-slider/pet-slider.component'
import { VetSliderComponent } from '../components/vet-slider/vet-slider.component'

import { HomePageComponent } from './home-page.component'

describe('HomePageComponent', () => {
	let component: HomePageComponent
	let fixture: ComponentFixture<HomePageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				HomePageComponent,
				PetSliderComponent,
				VetSliderComponent,
				HomeMainComponent,
				PetServicesComponent,
				HomeDonateComponent,
				HomeAboutComponent,
				HomeNewsComponent
			],
			providers: [HttpClient, HttpHandler, MatSnackBar, Overlay]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(HomePageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

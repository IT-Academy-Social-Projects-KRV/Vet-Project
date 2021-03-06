/* eslint-disable no-undef */
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HomeNewsComponent } from './home-news.component'

describe('HomeNewsComponent', () => {
	let component: HomeNewsComponent
	let fixture: ComponentFixture<HomeNewsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeNewsComponent],
			providers: [HttpClient, HttpHandler]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeNewsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

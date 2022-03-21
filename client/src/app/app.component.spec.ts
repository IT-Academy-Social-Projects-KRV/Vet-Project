/* eslint-disable no-undef */
import { TestBed } from '@angular/core/testing'
import { MatIconModule } from '@angular/material/icon'
import { RouterTestingModule } from '@angular/router/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LoadingComponent } from '@shared/components/loading/loading.component'
import { FooterComponent } from '@shared/components/page-layout/footer/footer.component'
import { HeaderComponent } from '@shared/components/page-layout/header/header.component'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, MatIconModule, FontAwesomeModule],
			declarations: [AppComponent, FooterComponent, LoadingComponent, HeaderComponent]
		}).compileComponents()
	})

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app).toBeTruthy()
	})

	it(`should have as title 'client'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app.title).toEqual('client')
	})

	xit('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('.content span')?.textContent).toContain('client app is running!')
	})
})

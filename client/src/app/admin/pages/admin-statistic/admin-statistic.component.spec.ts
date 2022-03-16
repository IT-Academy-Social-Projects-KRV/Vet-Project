import { LayoutModule } from '@angular/cdk/layout'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { HttpClient, HttpHandler } from '@angular/common/http'

import { AdminStatisticComponent } from './admin-statistic.component'

describe('AdminDashboardComponent', () => {
	let component: AdminStatisticComponent
	let fixture: ComponentFixture<AdminStatisticComponent>

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [AdminStatisticComponent],
				imports: [
					NoopAnimationsModule,
					LayoutModule,
					MatButtonModule,
					MatCardModule,
					MatGridListModule,
					MatIconModule,
					MatMenuModule
				],
				providers: [HttpClient, HttpHandler]
			}).compileComponents()
		})
	)

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminStatisticComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should compile', () => {
		expect(component).toBeTruthy()
	})
})

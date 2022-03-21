import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router'
import { AdminNavComponent } from '../admin-nav/admin-nav.component'

import { AdminLayoutComponent } from './admin-layout.component'

describe('AdminLayoutComponent', () => {
	let component: AdminLayoutComponent
	let fixture: ComponentFixture<AdminLayoutComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminLayoutComponent, AdminNavComponent, RouterOutlet],
			imports: [
				MatSidenavModule,
				BrowserAnimationsModule,
				MatDialogModule,
				MatDividerModule,
				MatListModule,
				MatIconModule
			],
			providers: [ChildrenOutletContexts]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminLayoutComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

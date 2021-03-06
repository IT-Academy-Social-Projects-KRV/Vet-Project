import { LayoutModule } from '@angular/cdk/layout'
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'

import { AdminNavComponent } from './admin-nav.component'
import { MatDialog, MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog'
import { Overlay } from '@angular/cdk/overlay'

describe('AdminNavComponent', () => {
	let component: AdminNavComponent
	let fixture: ComponentFixture<AdminNavComponent>

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [AdminNavComponent],
				imports: [
					NoopAnimationsModule,
					LayoutModule,
					MatButtonModule,
					MatIconModule,
					MatListModule,
					MatSidenavModule,
					MatToolbarModule,
					MatDialogModule
				]
			}).compileComponents()
		})
	)

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminNavComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should compile', () => {
		expect(component).toBeTruthy()
	})
})

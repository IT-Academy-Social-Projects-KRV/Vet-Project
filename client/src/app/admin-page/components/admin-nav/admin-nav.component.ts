import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog'
import { LogoutModalComponent } from '../logout-modal/logout-modal.component'

@Component({
	selector: 'app-admin-nav',
	templateUrl: './admin-nav.component.html',
	styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent {
	loadedFeature = ''
	onSelect(feature: string) {
		this.loadedFeature = feature
	}
	// menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products']
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(result => result.matches),
		shareReplay()
	)

	constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
		this.loadedFeature = 'dashboard'
	}

	openDialog() {
		this.dialog.open(LogoutModalComponent)
	}
}

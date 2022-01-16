import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminUnitComponent } from './pages/admin-unit/admin-unit.component'
import { AdminPageRoutingModule } from './admin-page-routing.module'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { MatInputModule } from '@angular/material/input'
import { AdminEditPetComponent } from './components/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVolonteerComponent } from './components/admin-edit-volonteer/admin-edit-volonteer.component'
import { MatSelectModule } from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		AdminUnitComponent,
		AdminNavComponent,
		AdminDashboardComponent,
		AdminEditVetComponent,
		AdminEditPetComponent,
		AdminEditVolonteerComponent
	],
	imports: [
		CommonModule,
		AdminPageRoutingModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatInputModule,
		MatSelectModule,
		ReactiveFormsModule
	]
})
export class AdminPageModule {}

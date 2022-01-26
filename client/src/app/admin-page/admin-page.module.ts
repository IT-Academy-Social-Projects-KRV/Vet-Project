import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminPageRoutingModule } from './admin-page-routing.module'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'
import { LoginModalComponent } from './components/login-modal/login-modal.component'
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
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { AdminUpdateVetComponent } from './components/admin-update-vet/admin-update-vet.component'
import { VetsModule } from '../vets/vets.module'
import { UpdateVetComponent } from './components/update-vet/update-vet.component'
@NgModule({
	declarations: [
		AdminNavComponent,
		AdminDashboardComponent,
		AdminEditVetComponent,
		AdminEditPetComponent,
		AdminEditVolonteerComponent,
		LoginModalComponent,
		AdminUpdateVetComponent,
		UpdateVetComponent
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
		ReactiveFormsModule,
		MatTableModule,
		MatPaginatorModule,
		MatFormFieldModule,
		MatDialogModule,
		FormsModule,
		VetsModule
	],
	exports: [LoginModalComponent]
})
export class AdminPageModule {}

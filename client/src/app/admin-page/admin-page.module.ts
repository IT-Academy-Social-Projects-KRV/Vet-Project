import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LayoutModule } from '@angular/cdk/layout'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTreeModule } from '@angular/material/tree'
import { MatSortModule } from '@angular/material/sort'

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts'
import * as more from 'highcharts/highcharts-more.src'
import * as exporting from 'highcharts/modules/exporting.src'

import { ApiServices } from '@shared/services/api.service'
import { VolunteersService } from './components/admin-edit-volonteer/volunteers.service'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AdminPageRoutingModule } from './admin-page-routing.module'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'
import { AdminEditPetComponent } from './components/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVolonteerComponent } from './components/admin-edit-volonteer/admin-edit-volonteer.component'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { LoginModalComponent } from './components/login-modal/login-modal.component'
import { PetEditDialogComponent } from './components/pet-edit-dialog/pet-edit-dialog.component'
import { VetAddDialogComponent } from './components/vet-add-dialog/vet-add-dialog.component'
import { UpdateVetComponent } from './components/update-vet/update-vet.component'
import { EditPetPageComponent } from './components/edit-pet-page/edit-pet-page.component'
import { PetAddDialogComponent } from './components/pet-add-dialog/pet-add-dialog.component'
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component'
import { VetDeleteDialogComponent } from './components/vet-delete-dialog/vet-delete-dialog.component'
import { PetDeleteModalComponent } from './components/pet-delete-modal/pet-delete-modal.component'
import { VolunteersAddDialogComponent } from './components/volunteers-add-dialog/volunteers-add-dialog.component'
import { VolunteersDeleteDialogComponent } from './components/volunteers-delete-dialog/volunteers-delete-dialog.component'
import { WidgetCardComponent } from './components/widget-card/widget-card.component'
import { WidgetPieComponent } from './components/widget-pie/widget-pie.component'
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component'

@NgModule({
	declarations: [
		AdminNavComponent,
		AdminDashboardComponent,
		AdminEditVetComponent,
		AdminEditPetComponent,
		AdminEditVolonteerComponent,
		LoginModalComponent,
		LogoutModalComponent,
		PetEditDialogComponent,
		VetAddDialogComponent,
		UpdateVetComponent,
		EditPetPageComponent,
		VetDeleteDialogComponent,
		PetAddDialogComponent,
		VetAddDialogComponent,
		PetDeleteModalComponent,
		VolunteersAddDialogComponent,
		VolunteersDeleteDialogComponent,
		WidgetCardComponent,
		WidgetPieComponent,
		AdminLayoutComponent
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
		MatTabsModule,
		MatTreeModule,
		MatSortModule,
		ChartModule
	],
	providers: [
		{ provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] },
		ApiServices,
		VolunteersService,
		MatTableModule
	],
	exports: [LoginModalComponent]
})
export class AdminPageModule {}

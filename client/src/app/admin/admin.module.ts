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
import { VolunteersService } from './pages/admin-edit-volunteer/volunteers.service'
import { AdminStatisticComponent } from './pages/admin-statistic/admin-statistic.component'
import { AdminPageRoutingModule } from './admin-routing.module'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'
import { AdminEditPetComponent } from './pages/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVolunteerComponent } from './pages/admin-edit-volunteer/admin-edit-volunteer.component'
import { AdminEditVetComponent } from './pages/admin-edit-vet/admin-edit-vet.component'
import { PetUpdateDialogComponent } from './components/dialogs/pet-update-dialog/pet-update-dialog.component'
import { VetAddDialogComponent } from './components/dialogs/vet-add-dialog/vet-add-dialog.component'
import { VetUpdateComponent } from './components/dialogs/vet-update-dialog/vet-update-dialog.component'
import { PetAddDialogComponent } from './components/dialogs/pet-add-dialog/pet-add-dialog.component'
import { LogoutModalComponent } from '../auth/logout-modal/logout-modal.component'
import { VetDeleteDialogComponent } from './components/dialogs/vet-delete-dialog/vet-delete-dialog.component'
import { PetDeleteDialogComponent } from './components/dialogs/pet-delete-dialog/pet-delete-dialog.component'
import { VolunteersAddDialogComponent } from './components/dialogs/volunteers-add-dialog/volunteers-add-dialog.component'
import { VolunteersDeleteDialogComponent } from './components/dialogs/volunteers-delete-dialog/volunteers-delete-dialog.component'
import { WidgetCardComponent } from './components/widget-card/widget-card.component'
import { WidgetPieComponent } from './components/widget-pie/widget-pie.component'
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component'
import { UploaderComponent } from './components/dialogs/uploader/uploader.component'
import { UploadTaskComponent } from './components/dialogs/upload-task/upload-task.component'

@NgModule({
	declarations: [
		AdminNavComponent,
		AdminStatisticComponent,
		AdminEditVetComponent,
		AdminEditPetComponent,
		AdminEditVolunteerComponent,
		LogoutModalComponent,
		PetUpdateDialogComponent,
		VetAddDialogComponent,
		VetUpdateComponent,
		VetDeleteDialogComponent,
		PetAddDialogComponent,
		VetAddDialogComponent,
		PetDeleteDialogComponent,
		VolunteersAddDialogComponent,
		VolunteersDeleteDialogComponent,
		WidgetCardComponent,
		WidgetPieComponent,
		AdminLayoutComponent,
		UploaderComponent,
		UploadTaskComponent
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
		VolunteersService
	],
	exports: []
})
export class AdminModule {}

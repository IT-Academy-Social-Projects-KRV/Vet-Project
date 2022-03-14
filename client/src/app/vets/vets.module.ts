import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

import { VetsRoutingModule } from './vets-routing.module'
import { VetPageComponent } from './pages/vet-page/vet-page.component'
import { VetUnitPageComponent } from './pages/vet-unit-page/vet-unit-page.component'
import { VeterinariansComponent } from './components/veterinarians/veterinarians.component'
import { VetServicesComponent } from './components/vet-services/vet-services.component'
import { VetAnimalsTypeComponent } from './components/vet-animals-type/vet-animals-type.component'
import { VetListComponent } from './components/vet-list/vet-list.component'
import { VetsFilterComponent } from './components/vets-filter/vets-filter.component'
import { SharedModule } from '@shared/shared.module'

@NgModule({
	declarations: [
		VetPageComponent,
		VetUnitPageComponent,
		VeterinariansComponent,
		VetServicesComponent,
		VetAnimalsTypeComponent,
		VetListComponent,
		VetsFilterComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		VetsRoutingModule,
		MatButtonModule,
		FormsModule,
		SharedModule
	]
})
export class VetsModule {}

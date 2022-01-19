import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'

import { VetsRoutingModule } from './vets-routing.module'
import { VetPageComponent } from './pages/vet-page/vet-page.component'
import { VetListCardComponent } from '@shared/components/vet-list-card/vet-list-card.component'
import { VetUnitPageComponent } from './pages/vet-unit-page/vet-unit-page.component'
import { VeterinariansComponent } from './components/veterinarians/veterinarians.component'
import { VetServicesComponent } from './components/vet-services/vet-services.component'
import { VetAnimalsTypeComponent } from './components/vet-animals-type/vet-animals-type.component'
import { VetListComponent } from './components/vet-list/vet-list.component'

@NgModule({
	declarations: [
		VetPageComponent,
		VetListCardComponent,
		VetUnitPageComponent,
		VeterinariansComponent,
		VetServicesComponent,
		VetAnimalsTypeComponent,
		VetListComponent
	],
	imports: [CommonModule, MatCardModule, MatDividerModule, MatListModule, VetsRoutingModule],
	exports: [VetListCardComponent]
})
export class VetsModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { PetsRoutingModule } from './pets-routing.module'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'

import { AnimalPageComponent } from './pages/animal-list-page/animal-page.component'
import { AnimalListCardComponent } from '@shared/components/animal-list-card/animal-list-card.component'
import { AnimalUnitPageComponent } from './pages/animal-unit-page/animal-unit-page.component'

import { AnimalInfoService } from '@shared/services/animal-info.service'
import { PetsFilterComponent } from './components/pets-filter/pets-filter.component'
import { PetsGethomeComponent } from './components/pets-gethome/pets-gethome.component'
import { AnimalListComponent } from './components/animal-list/animal-list.component'

@NgModule({
	declarations: [
		AnimalPageComponent,
		AnimalListCardComponent,
		AnimalUnitPageComponent,
		PetsFilterComponent,
		PetsGethomeComponent,
		AnimalListComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		PetsRoutingModule,
		MatSelectModule,
		FormsModule
	],
	exports: [AnimalListCardComponent],
	providers: [AnimalInfoService]
})
export class PetsModule {}

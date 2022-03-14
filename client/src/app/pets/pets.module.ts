import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { PetsRoutingModule } from './pets-routing.module'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AnimalPageComponent } from './pages/animal-list-page/animal-page.component'
import { AnimalUnitPageComponent } from './pages/animal-unit-page/animal-unit-page.component'

import { PetsFilterComponent } from './components/pets-filter/pets-filter.component'
import { PetsGethomeComponent } from './components/pets-gethome/pets-gethome.component'
import { AnimalListComponent } from './components/animal-list/animal-list.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SharedModule } from '@shared/shared.module'

@NgModule({
	declarations: [
		AnimalPageComponent,
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
		FormsModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		SharedModule
	]
})
export class PetsModule {}

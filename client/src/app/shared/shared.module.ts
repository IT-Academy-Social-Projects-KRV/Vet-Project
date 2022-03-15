import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UniqPipe } from './pipes/uniq.pipe'
import { LoadingComponent } from './components/loading/loading.component'
import { VetListCardComponent } from './components/vet-list-card/vet-list-card.component'
import { AnimalListCardComponent } from './components/animal-list-card/animal-list-card.component'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatButtonModule } from '@angular/material/button'
import { VetsRoutingModule } from '../vets/vets-routing.module'
import { PetsRoutingModule } from '../pets/pets-routing.module'
import { VolonteersListCardComponent } from './components/volonteers-list-card/volonteers-list-card.component'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
	declarations: [
		UniqPipe,
		LoadingComponent,
		VetListCardComponent,
		AnimalListCardComponent,
		VolonteersListCardComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		VetsRoutingModule,
		PetsRoutingModule,
		MatDialogModule
	],
	exports: [
		UniqPipe,
		LoadingComponent,
		VetListCardComponent,
		AnimalListCardComponent,
		VolonteersListCardComponent
	]
})
export class SharedModule {}

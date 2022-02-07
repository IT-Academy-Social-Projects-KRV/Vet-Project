import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

import { VolonteersPageComponent } from './pages/volonteers-page/volonteers-page.component'
import { VolonteersListComponent } from './components/volonteers-list/volonteers-list.component'
import { VolonteersRoutingModule } from './volonteers-routing.module'
import { VolonteersListCardComponent } from '@shared/components/volonteers-list-card/volonteers-list-card.component'
import { VolonteersUnitPageComponent } from './pages/volonteers-unit-page/volonteers-unit-page.component'

@NgModule({
	declarations: [
		VolonteersPageComponent,
		VolonteersListComponent,
		VolonteersListCardComponent,
		VolonteersUnitPageComponent
	],
	imports: [
		CommonModule,
		VolonteersRoutingModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		MatButtonModule
	],
	exports: [VolonteersListCardComponent]
})
export class VolonteersModule {}

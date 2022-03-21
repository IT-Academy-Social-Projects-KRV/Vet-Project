import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

import { VolonteersPageComponent } from './pages/volonteers-page/volonteers-page.component'
import { VolonteersListComponent } from './components/volonteers-list/volonteers-list.component'
import { VolonteersRoutingModule } from './volonteers-routing.module'
import { SharedModule } from '@shared/shared.module'

@NgModule({
	declarations: [VolonteersPageComponent, VolonteersListComponent],
	imports: [
		CommonModule,
		VolonteersRoutingModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		MatButtonModule,
		SharedModule
	]
})
export class VolonteersModule {}

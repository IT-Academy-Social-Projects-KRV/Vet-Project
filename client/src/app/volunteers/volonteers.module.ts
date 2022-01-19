import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VolonteersPageComponent } from './pages/volonteers-page/volonteers-page.component'
import { VolonteersListComponent } from './components/volonteers-list/volonteers-list.component'
import { VolonteersRoutingModule } from './volonteers-routing.module'

@NgModule({
	declarations: [VolonteersPageComponent, VolonteersListComponent],
	imports: [CommonModule, VolonteersRoutingModule],
})
export class VolonteersModule {}

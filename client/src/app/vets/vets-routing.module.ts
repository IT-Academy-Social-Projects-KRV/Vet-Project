import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { VetListPageComponent } from './pages/vet-list-page/vet-list-page.component'

const routes: Routes = [
	{
		path: '',
		component: VetListPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VetsRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VetUnitPageComponent } from './pages/vet-unit-page/vet-unit-page.component'

import { VetPageComponent } from './pages/vet-page/vet-page.component'

const routes: Routes = [
	{
		path: '',
		component: VetPageComponent
	},
	{
		path: ':id',
		component: VetUnitPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VetsRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VetUnitPageComponent } from './pages/vet-unit-page/vet-unit-page.component'
import { VetListPageComponent } from './pages/vet-list-page/vet-list-page.component'

const routes: Routes = [
	{
		path: '',
		component: VetListPageComponent
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

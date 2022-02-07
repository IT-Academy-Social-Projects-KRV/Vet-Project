import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VolonteersPageComponent } from './pages/volonteers-page/volonteers-page.component'
import { VolonteersUnitPageComponent } from './pages/volonteers-unit-page/volonteers-unit-page.component'

const routes: Routes = [
	{
		path: '',
		component: VolonteersPageComponent
	},
	{
		path: ':id',
		component: VolonteersUnitPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VolonteersRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AnimalPageComponent } from './pages/animal-list-page/animal-page.component'
import { AnimalUnitPageComponent } from './pages/animal-unit-page/animal-unit-page.component'

const routes: Routes = [
	{
		path: '',
		component: AnimalPageComponent
	},
	{
		path: ':id',
		component: AnimalUnitPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PetsRoutingModule {}

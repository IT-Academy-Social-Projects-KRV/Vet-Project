import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component'
import { AnimalUnitPageComponent } from './pages/animal-unit-page/animal-unit-page.component'

const routes: Routes = [
	{
		path: '',
		component: AnimalListPageComponent
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

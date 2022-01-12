import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VolonteersPageComponent } from './pages/volonteers-page/volonteers-page.component'

const routes: Routes = [
	{
		path: '',
		component: VolonteersPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VolonteersRoutingModule {}

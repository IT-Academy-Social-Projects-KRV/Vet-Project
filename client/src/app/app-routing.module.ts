import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'animalsList',
		loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
	},
	{
		path: 'vetsList',
		loadChildren: () => import('./vets/vets.module').then(m => m.VetsModule)
	},
	{
		path: 'volonteersList',
		loadChildren: () => import('./volunteers/volonteers.module').then(m => m.VolonteersModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule)
	},
	{
		path: '',
		loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminPageModule } from './admin-page/admin-page.module'
import { LoginModalComponent } from './admin-page/components/login-modal/login-modal.component'

const routes: Routes = [
	{
		path: 'animals-list',
		loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
	},
	{
		path: 'vets-list',
		loadChildren: () => import('./vets/vets.module').then(m => m.VetsModule)
	},
	{
		path: 'volonteers-list',
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

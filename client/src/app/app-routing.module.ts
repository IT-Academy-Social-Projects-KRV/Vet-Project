import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '',
		loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginService } from '@shared/services/login.service'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AdminEditPetComponent } from './components/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { LoginGuard } from './components/login-modal/login.quard'
import { AdminEditVolonteerComponent } from './components/admin-edit-volonteer/admin-edit-volonteer.component'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'
import { EditPetPageComponent } from './components/edit-pet-page/edit-pet-page.component'

const routes: Routes = [
	{
		path: '',
		canActivate: [LoginGuard],
		component: AdminNavComponent,
		children: [
			{
				path: 'dashboard',
				component: AdminDashboardComponent
			},
			{
				path: 'editVet',
				component: AdminEditVetComponent
			},
			{
				path: 'editPet',
				component: AdminEditPetComponent
			},
			{
				path: 'editPet/:id',
				component: EditPetPageComponent
			},
			{
				path: 'editVolonteer',
				component: AdminEditVolonteerComponent
			},
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full'
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminPageRoutingModule {}

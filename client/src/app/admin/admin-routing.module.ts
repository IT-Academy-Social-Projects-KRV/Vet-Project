import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminStatisticComponent } from './pages/admin-statistic/admin-statistic.component'
import { AdminEditPetComponent } from './pages/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVetComponent } from './pages/admin-edit-vet/admin-edit-vet.component'
import { LoginGuard } from './components/auth/login-modal/login.quard'
import { AdminEditVolunteerComponent } from './pages/admin-edit-volunteer/admin-edit-volunteer.component'
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component'

const routes: Routes = [
	{
		path: '',
		canActivate: [LoginGuard],
		component: AdminLayoutComponent,
		children: [
			{
				path: 'dashboard',
				component: AdminStatisticComponent
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
				path: 'editVolonteer',
				component: AdminEditVolunteerComponent
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

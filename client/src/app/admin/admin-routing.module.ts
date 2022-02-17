import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminStatisticComponent } from './pages/admin-statistic/admin-statistic.component'
import { AdminEditPetComponent } from './pages/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVetComponent } from './pages/admin-edit-vet/admin-edit-vet.component'
import { LoginGuard } from '../auth/login/login.guard'
import { AdminEditVolunteerComponent } from './pages/admin-edit-volunteer/admin-edit-volunteer.component'
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component'

const routes: Routes = [
	{
		path: '',
		canActivate: [LoginGuard],
		component: AdminLayoutComponent,
		children: [
			{
				path: 'statistic',
				component: AdminStatisticComponent
			},
			{
				path: 'edit-vet',
				component: AdminEditVetComponent
			},
			{
				path: 'edit-pet',
				component: AdminEditPetComponent
			},
			{
				path: 'edit-volonteer',
				component: AdminEditVolunteerComponent
			},
			{
				path: '',
				redirectTo: 'statistic',
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

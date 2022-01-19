import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AdminEditPetComponent } from './components/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { AdminEditVolonteerComponent } from './components/admin-edit-volonteer/admin-edit-volonteer.component'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'

const routes: Routes = [
	{
		path: '',
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

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AdminEditPetComponent } from './components/admin-edit-pet/admin-edit-pet.component'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { AdminEditVolonteerComponent } from './components/admin-edit-volonteer/admin-edit-volonteer.component'
import { AdminNavComponent } from './components/admin-nav/admin-nav.component'
import { AdminUpdateVetComponent } from './components/admin-update-vet/admin-update-vet.component'
import { EditPetPageComponent } from './components/edit-pet-page/edit-pet-page.component'

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
				path: 'editPet/:id',
				component: EditPetPageComponent
			},
			{
				path: 'editVolonteer',
				component: AdminEditVolonteerComponent
			},
			{
				path: 'updateVet',
				component: AdminUpdateVetComponent
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

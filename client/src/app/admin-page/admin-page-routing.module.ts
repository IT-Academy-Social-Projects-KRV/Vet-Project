import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component'

const routes: Routes = [
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{
				path: 'dashboard',
				component: AdminDashboardComponent
			},
			{
				path: 'edit-vet',
				component: AdminEditVetComponent
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminPageRoutingModule {}

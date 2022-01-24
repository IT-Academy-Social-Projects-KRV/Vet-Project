import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginService } from '@shared/services/login.service'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AdminEditVetComponent } from './components/admin-edit-vet/admin-edit-vet.component'
import { LoginGuard } from './components/login-modal/login.quard'
import { AdminUnitComponent } from './pages/admin-unit/admin-unit.component'

const routes: Routes = [
	{
		path: '',
		component: AdminUnitComponent,
		canActivate: [LoginGuard],
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

import { Component, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-admin-edit-vet',
	templateUrl: './admin-edit-vet.component.html',
	styleUrls: ['./admin-edit-vet.component.scss']
})
export class AdminEditVetComponent {
	selectFormControl = new FormControl('', Validators.required)
	vetsInfo$: Observable<Array<IVetsUnitInfo>>
	dataSource = new MatTableDataSource<IVetsUnitInfo[]>()
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort

	constructor(private apiServices: ApiServices) {}
	item: IVetsUnitInfo

	onCreateClinic(form): void {
		this.item = {
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}
		// Send Http request
		this.apiServices.postNewClinic(this.item)
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}
}

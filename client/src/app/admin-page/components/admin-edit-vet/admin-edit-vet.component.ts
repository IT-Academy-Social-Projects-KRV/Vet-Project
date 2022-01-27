import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { Observable } from 'rxjs'

import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
	selector: 'app-admin-edit-vet',
	templateUrl: './admin-edit-vet.component.html',
	styleUrls: ['./admin-edit-vet.component.scss']
})
export class AdminEditVetComponent implements OnInit {
	selectFormControl = new FormControl('', Validators.required)

	displayedColumns: string[] = ['id', 'title', 'adress', 'phone', 'email', 'delete']
	IVetsInfo$: Observable<Array<IVetsInfo>>

	dataSource = new MatTableDataSource<IVetsInfo[]>()
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort

	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.IVetsInfo$ = this.apiServices.getVetDetails()
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}

	// private getVets() {
	// 	this.apiServices.getVetDetails().subscribe(response => {
	// 		this.dataSource.data = response
	// 	})
	// }

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
		this.apiServices.postNewClinic(this.item).subscribe()
	}

	onDeleteClinic(): void {
		//...
	}
}

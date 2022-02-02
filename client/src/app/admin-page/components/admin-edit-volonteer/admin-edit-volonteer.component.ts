import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'
import { ApiServices } from '@shared/services/api.service'

/** Constants used to fill up our data base. */

@Component({
	selector: 'app-admin-edit-volonteer',
	templateUrl: './admin-edit-volonteer.component.html',
	styleUrls: ['./admin-edit-volonteer.component.scss']
})
export class AdminEditVolonteerComponent implements OnInit, AfterViewInit {
	displayedColumns: string[] = [
		'id',
		'first_name',
		'second_name',
		'email',
		'number',
		'edit',
		'delete'
	]
	dataSource = new MatTableDataSource<IVolonteersInfo>()

	@ViewChild(MatPaginator) paginator: MatPaginator
	@ViewChild(MatSort) sort: MatSort

	constructor(private apiServices: ApiServices) {}
	ngOnInit(): void {
		this.getVolonteers()
	}
	getVolonteers() {
		this.apiServices.getVolonteersInfo().subscribe(response => {
			this.dataSource.data = response
		})
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator
		this.dataSource.sort = this.sort
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}
}

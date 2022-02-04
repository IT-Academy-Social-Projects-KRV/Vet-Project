import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'
import { ApiServices } from '@shared/services/api.service'
import { DialogService } from './dialog.service'
import { VolunteersService } from './volunteers.service'
import { VolunteersAddDialogComponent } from '../volunteers-add-dialog/volunteers-add-dialog.component'
import { MatDialog } from '@angular/material/dialog'

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

	constructor(
		private apiServices: ApiServices,
		private dialog: DialogService,
		public service: VolunteersService,
		public matDialog: MatDialog
	) {}

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
	openConfirmDialog() {
		this.dialog
			.openConfirmDialog()
			.afterClosed()
			.subscribe(data => {
				const arr = this.dataSource.data.concat(data)
				this.dataSource.data = arr
				this.getVolonteers()
			})
	}
	openDeleteDialog(id) {
		this.dialog.openDeleteDialog(id)
	}
	onEdit(row) {
		this.service.populateForm(row)
		this.matDialog.open(VolunteersAddDialogComponent, {
			width: '500px',
			disableClose: true
		})
	}
}

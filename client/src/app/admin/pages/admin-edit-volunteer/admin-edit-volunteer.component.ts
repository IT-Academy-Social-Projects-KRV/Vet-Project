import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'
import { ApiServices } from '@shared/services/api.service'
import { DialogService } from './dialog.service'
import { VolunteersService } from './volunteers.service'
import { VolunteersAddDialogComponent } from '../../components/dialogs/volunteers-add-dialog/volunteers-add-dialog.component'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { NotifierService } from '@shared/services/notifier.service'

/** Constants used to fill up our data base. */

@Component({
	selector: 'app-admin-edit-volunteer',
	templateUrl: './admin-edit-volunteer.component.html',
	styleUrls: ['./admin-edit-volunteer.component.scss']
})
export class AdminEditVolunteerComponent implements OnInit, AfterViewInit {
	public dialogRef: MatDialogRef<any>
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
		public matDialog: MatDialog,
		private notifierService: NotifierService
	) {}

	ngOnInit(): void {
		this.getVolonteers()
	}
	private getVolonteers() {
		this.apiServices.getVolonteersInfo().subscribe(response => {
			this.dataSource.data = response
		})
	}
	public ngAfterViewInit() {
		this.dataSource.paginator = this.paginator
		this.dataSource.sort = this.sort
	}

	public applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}
	public openConfirmDialog(): void {
		this.dialog
			.openConfirmDialog()
			.afterClosed()
			.subscribe((data: IVolonteersInfo) => {
				if (data) {
					this.dataSource.data = [...this.dataSource.data, data]
				}
			})
	}
	public openDeleteDialog(id: number): void {
		this.dialog
			.openDeleteDialog(id)
			.afterClosed()
			.subscribe((result: boolean) => {
				if (result) {
					this.apiServices.deleteVolunteer(id).subscribe(response => {
						if (response) {
							const filtered = this.dataSource.data.filter(element => element.id !== id)
							this.dataSource.data = filtered
							this.notifierService.showSuccessNotification('Волонтера успішно видаленo', 'Ok')
						}
					})
				}
				this.dialogRef = null
			})
	}
	public onEdit(row): void {
		console.log(row)
		this.service.populateForm(row)
		this.matDialog
			.open(VolunteersAddDialogComponent, {
				width: '500px',
				disableClose: true
			})
			.afterClosed()
			.subscribe(response => {
				const index = this.dataSource.data.findIndex(element => element.id === response.id)
				const data = this.dataSource.data
				data[index] = response
				this.dataSource.data = data
			})
	}
}

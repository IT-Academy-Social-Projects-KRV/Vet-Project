import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ApiServices } from '@shared/services/api.service'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { VetUpdateComponent } from '../../components/dialogs/vet-update-dialog/vet-update-dialog.component'
import { VetAddDialogComponent } from '../../components/dialogs/vet-add-dialog/vet-add-dialog.component'
import { VetDeleteDialogComponent } from '../../components/dialogs/vet-delete-dialog/vet-delete-dialog.component'
import { NotifierService } from '@shared/services/notifier.service'

@Component({
	selector: 'app-admin-edit-vet',
	templateUrl: './admin-edit-vet.component.html',
	styleUrls: ['./admin-edit-vet.component.scss']
})
export class AdminEditVetComponent implements OnInit, AfterViewInit {
	selectFormControl = new FormControl('', Validators.required)

	displayedColumns: string[] = ['id', 'title', 'adress', 'phone', 'details', 'delete']

	dataSource = new MatTableDataSource<IVetsUnitInfo>()

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort
	dialogRef: MatDialogRef<any>

	constructor(
		private apiServices: ApiServices,
		public dialog: MatDialog,
		private notifierService: NotifierService
	) {}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort
	}

	ngOnInit(): void {
		this.getVets()
		this.dataSource.paginator = this.paginator
		this.paginator._intl.itemsPerPageLabel = "Кількість об'єктів на сторінці:"
		this.paginator._intl.nextPageLabel = 'Наступна сторінка'
		this.paginator._intl.previousPageLabel = 'Попередня сторінка'
		this.paginator._intl.lastPageLabel = 'Остання сторінка'
		this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
			if (length === 0 || pageSize === 0) {
				return '0 з ' + length
			}
			length = Math.max(length, 0)
			const startIndex = page * pageSize
			const endIndex =
				startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize
			return startIndex + 1 + ' - ' + endIndex + ' з ' + length
		}
	}

	public getVets() {
		this.apiServices.getVetDetails().subscribe(response => {
			this.dataSource.data = response
		})
	}

	public openDialog(row: IVetsUnitInfo) {
		const dialog = this.dialog.open(VetUpdateComponent, {
			width: '800px',
			// Can be closed only by clicking the close button
			disableClose: true,
			data: row
		})
	}

	public applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}

	public onOpenAddDialog(): void {
		this.dialogRef = this.dialog.open(VetAddDialogComponent, {
			width: '550px',
			disableClose: false
		})
		this.dialogRef.afterClosed().subscribe(result => {
			if (result) {
				const newDataArr = this.dataSource.data.concat(this.dialogRef.componentInstance.item)
				this.dataSource.data = newDataArr
			}
			this.dialogRef = null
		})
	}

	public onOpenDeleteDialog(id: number): void {
		this.dialogRef = this.dialog.open(VetDeleteDialogComponent, {
			disableClose: true
		})
		this.dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.onDeleteClinic(id)
				this.notifierService.showSuccessNotification('Клініку успішно видаленo', 'Ok')
			}
			this.dialogRef = null
		})
	}

	private onDeleteClinic(id: number): void {
		this.apiServices.deleteClinic(id).subscribe()
		const filtered = this.dataSource.data.filter(element => element.id !== id)
		this.dataSource.data = filtered
	}
}

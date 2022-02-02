import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { ApiServices } from '@shared/services/api.service'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { VetAddDialogComponent } from '../vet-add-dialog/vet-add-dialog.component'
import { VetDeleteDialogComponent } from '../vet-delete-dialog/vet-delete-dialog.component'

@Component({
	selector: 'app-admin-edit-vet',
	templateUrl: './admin-edit-vet.component.html',
	styleUrls: ['./admin-edit-vet.component.scss']
})
export class AdminEditVetComponent implements OnInit, AfterViewInit {
	selectFormControl = new FormControl('', Validators.required)

	displayedColumns: string[] = ['id', 'title', 'adress', 'phone', 'email', 'delete']

	dataSource = new MatTableDataSource<IVetsInfo>()

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort
	dialogRef: MatDialogRef<any>

	constructor(private apiServices: ApiServices, public dialog: MatDialog) {}

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

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}

	getVets() {
		this.apiServices.getVetDetails().subscribe(response => {
			this.dataSource.data = response
		})
	}

	onAdd() {
		const dialog = this.dialog.open(VetAddDialogComponent, {
			width: '550px',
			disableClose: false
		})
	}

	onDelete(id: number) {
		this.dialogRef = this.dialog.open(VetDeleteDialogComponent, {
			disableClose: true
		})
		this.dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.onDeleteClinic(id)
			}
			this.dialogRef = null
		})
	}

	public onDeleteClinic(id: number): void {
		this.apiServices.deleteClinic(id).subscribe()
		const filtered = this.dataSource.data.filter(element => element.id !== id)
		this.dataSource.data = filtered
	}
}

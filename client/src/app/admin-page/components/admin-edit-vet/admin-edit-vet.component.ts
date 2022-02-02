import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'

import { ApiServices } from '@shared/services/api.service'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { VetAddDialogComponent } from '../vet-add-dialog/vet-add-dialog.component'

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

	item: IVetsUnitInfo

	onCreateClinic(form: IVetsUnitInfo): void {
		this.item = {
			title: form.title,
			adress: form.adress,
			phone: form.phone,
			email: form.email,
			map_link: form.map_link
		}
		// Send Http request
		this.apiServices.postNewClinic(this.item).subscribe()
		this.getVets()
	}

	onDeleteClinic(form: IVetsUnitInfo): void {
		this.item = { id: form.id }
		this.apiServices.deleteClinic(this.item.id).subscribe(() => this.getVets())
	}
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs'

import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'

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

	constructor(private apiServices: ApiServices, public dialog: MatDialog) {}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort
	}

	ngOnInit(): void {
		this.getVets()
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

	onDelete(id: string) {
		const dialog = this.dialog.open(VetDeleteDialogComponent, {
			width: '550px',
			disableClose: false
		})
	}

	item: IVetsUnitInfo

	onDeleteClinic(form: IVetsUnitInfo): void {
		this.item = { id: form.id }
		this.apiServices.deleteClinic(this.item.id).subscribe(() => this.getVets())
	}
}

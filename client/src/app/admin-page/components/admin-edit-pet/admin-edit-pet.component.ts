import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { PetEditDialogComponent } from '../pet-edit-dialog/pet-edit-dialog.component'
import { PetAddDialogComponent } from '../pet-add-dialog/pet-add-dialog.component'
import { PetDeleteModalComponent } from '../pet-delete-modal/pet-delete-modal.component'

@Component({
	selector: 'app-admin-edit-pet',
	templateUrl: './admin-edit-pet.component.html',
	styleUrls: ['./admin-edit-pet.component.scss']
})
export class AdminEditPetComponent implements OnInit, AfterViewInit {
	displayedColumns: string[] = [
		'id',
		'name',
		'gender',
		'breed',
		'age',
		'curator',
		'details',
		'delete'
	]
	dataSource = new MatTableDataSource<IAnimalsInfo>()

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort
	dialogRef: MatDialogRef<any>
	constructor(private apiServices: ApiServices, public dialog: MatDialog) {}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort
	}

	ngOnInit(): void {
		this.fetchPets()
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

	public fetchPets() {
		this.apiServices.getAnimalsInfo().subscribe(response => {
			this.dataSource.data = response
		})
	}

	onUpdate(icon: IAnimalsUnitInfo) {
		this.dialogRef = this.dialog.open(PetEditDialogComponent, {
			width: '500px',
			disableClose: true,
			data: icon
		})
	}
	openAddDialog() {
		this.dialogRef = this.dialog.open(PetAddDialogComponent, {
			disableClose: true
		})
		this.dialogRef.afterClosed().subscribe(response => {
			if (response) {
				const newArr = this.dataSource.data.concat(response)
				this.dataSource.data = newArr
			}
			this.dialogRef = null
		})
	}
	openDeleteDialog(id) {
		this.dialogRef = this.dialog.open(PetDeleteModalComponent, {
			disableClose: true
		})
		this.dialogRef.afterClosed().subscribe(response => {
			if (response) {
				this.onDelete(id)
			}
			this.dialogRef = null
		})
	}

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}

	public onDelete(id) {
		this.apiServices.deleteAnimal(id).subscribe(response => {
			const filtered = this.dataSource.data.filter(element => element.id !== id)
			this.dataSource.data = filtered
		})
	}
}

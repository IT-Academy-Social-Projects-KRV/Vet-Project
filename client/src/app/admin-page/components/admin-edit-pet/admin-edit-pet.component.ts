import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { PetEditDialogComponent } from '../pet-edit-dialog/pet-edit-dialog.component'
import { PetAddDialogComponent } from '../pet-add-dialog/pet-add-dialog.component'

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

	private fetchPets() {
		this.apiServices.getAnimalsInfo().subscribe(response => {
			this.dataSource.data = response
		})
	}

	onUpdate(icon: IAnimalsUnitInfo) {
		const dialog = this.dialog.open(PetEditDialogComponent, {
			width: '500px',
			disableClose: true,
			data: icon
		})
	}
	openAddDialog() {
		const dialog = this.dialog.open(PetAddDialogComponent, {
			width: '500px',
			height: '90%',
			disableClose: true
		})
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}

	// public redirectToUpdate = (id: string) => {}
	public redirectToDelete = (id: string) => {
		this.apiServices.deleteAnimal(id).subscribe()
		this.fetchPets()
	}
}

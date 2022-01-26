import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'

@Component({
	selector: 'app-edit-pet-page',
	templateUrl: './edit-pet-page.component.html',
	styleUrls: ['./edit-pet-page.component.scss']
})
export class EditPetPageComponent implements OnInit {
	displayedColumns: string[] = ['id', 'name', 'gender', 'breed', 'age', 'curator']
	dataSource = new MatTableDataSource<IAnimalsInfo>()

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.fetchPets()
	}
	private fetchPets() {
		this.http.get<IAnimalsUnitInfo[]>('http://localhost:3200/api/animals').subscribe(response => {
			this.dataSource.data = response as unknown as IAnimalsInfo[]
			this.dataSource.sort = this.sort
			this.dataSource.paginator = this.paginator
		})
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
		this.dataSource.filter = filterValue.trim().toLowerCase()

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage()
		}
	}
}

import { Component, OnInit, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
	selector: 'app-admin-edit-pet',
	templateUrl: './admin-edit-pet.component.html',
	styleUrls: ['./admin-edit-pet.component.scss']
})
export class AdminEditPetComponent implements OnInit {
	displayedColumns: string[] = ['id', 'name', 'gender', 'breed', 'age', 'curator']
	dataSource = new MatTableDataSource<IAnimalsInfo>()

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
	@ViewChild(MatSort, { static: true }) sort: MatSort
	constructor(private apiServices: ApiServices, private http: HttpClient) {}

	ngOnInit(): void {
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
	//Service for adding pets info
	item: IAnimalsUnitInfo
	curators: any[] = ['Куратор 1', 'Куратор 2']
	onSubmit(form: IAnimalsUnitInfo): void {
		this.item = {
			name: form.name,
			shelter_name: form.shelter_name,
			curator: form.curator,
			gender: form.gender,
			breed: form.breed,
			age: form.age,
			short_info: form.short_info,
			behavioral_features: form.behavioral_features,
			wishes_for_shelter: form.wishes_for_shelter
		}

		this.apiServices.postNewAnimal(this.item)
	}
	onCreateAnimal(): void {}
}

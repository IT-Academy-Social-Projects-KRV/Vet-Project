import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'
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
	animalsInfo$: Observable<IAnimalsInfo[]>
	petsInfo$: Observable<IAnimalsUnitInfo>

	dataSource: MatTableDataSource<IAnimalsInfo>

	@ViewChild(MatPaginator) paginator: MatPaginator
	@ViewChild(MatSort) sort: MatSort

	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.animalsInfo$ = this.apiServices.getAnimalsInfo()
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
	onEdit() {
		// this.Activatedroute.paramMap.subscribe(params => {
		// 	this.petsInfo$ = this.apiServices.getAnimalsUnitInfo(params.get('id'))
		// })
	}

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
		// console.log(this.item)

		this.apiServices.postNewAnimal(this.item)
	}
	onCreateAnimal(): void {}
}

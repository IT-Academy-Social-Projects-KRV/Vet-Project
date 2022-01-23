import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { Observable } from 'rxjs'
import { NgForm } from '@angular/forms'
import { IAnimalsInfo } from '@shared/interfaces/animals'

@Component({
	selector: 'app-admin-edit-pet',
	templateUrl: './admin-edit-pet.component.html',
	styleUrls: ['./admin-edit-pet.component.scss']
})
export class AdminEditPetComponent implements OnInit {
	displayedColumns: string[] = ['id', 'name', 'weight', 'breed', 'age', 'curator']

	animalsInfo$: Observable<IAnimalsInfo[]>

	petsInfo$: Observable<IAnimalsUnitInfo>

	constructor(private apiServices: ApiServices) {}

	ngOnInit(): void {
		this.animalsInfo$ = this.apiServices.getAnimalsInfo()
	}
	onEdit() {
		// this.Activatedroute.paramMap.subscribe(params => {
		// 	this.petsInfo$ = this.apiServices.getAnimalsUnitInfo(params.get('id'))
		// })
	}

	addData() {
		// const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length)
		// this.dataSource.push(ELEMENT_DATA[randomElementIndex])
		// this.table.renderRows()
	}

	removeData() {
		// this.dataSource.pop()
		// this.table.renderRows()
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

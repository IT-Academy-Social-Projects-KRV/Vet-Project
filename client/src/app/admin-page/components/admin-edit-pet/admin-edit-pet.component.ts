import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { MatTable } from '@angular/material/table'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'

export interface PeriodicElement {
	name: string
	position: number
	weight: number
	symbol: string
}
const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
]

@Component({
	selector: 'app-admin-edit-pet',
	templateUrl: './admin-edit-pet.component.html',
	styleUrls: ['./admin-edit-pet.component.scss']
})
export class AdminEditPetComponent {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
	dataSource = [...ELEMENT_DATA]

	@ViewChild(MatTable) table: MatTable<PeriodicElement>

	constructor(private apiServices: ApiServices) {}
	item: IAnimalsUnitInfo
	onSubmit(form): void {
		this.item = {
			name: form.title,
			shelterName: 'string',
			curator: 'string',
			gender: form.gender,
			breed: form.breed,
			age: form.age,
			shortInfo: form.shortInfo,
			behavioralFeatures: form.behavioralFeatures,
			wishesForShelter: form.wishesForShelter
		}
		this.apiServices.postNewAnimal(this.item)
	}
	onCreateAnimal(): void {}

	addData() {
		const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length)
		this.dataSource.push(ELEMENT_DATA[randomElementIndex])
		this.table.renderRows()
	}

	removeData() {
		this.dataSource.pop()
		this.table.renderRows()
	}
}

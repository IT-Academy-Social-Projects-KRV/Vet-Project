import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NotifierService } from '@shared/services/notifier.service'

@Component({
	selector: 'app-pet-add-dialog',
	templateUrl: './pet-add-dialog.component.html',
	styleUrls: ['./pet-add-dialog.component.scss']
})
export class PetAddDialogComponent implements OnInit {
	constructor(
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<IAnimalsUnitInfo>,
		private notifierService: NotifierService
	) {}
	item: IAnimalsUnitInfo
	public petsInfo$: Observable<IAnimalsInfo[]>
	// curators: any[] = ['Куратор 1', 'Куратор 2']
	// genders = ['M', 'F']
	ngOnInit(): void {
		this.petsInfo$ = this.apiServices.getAnimalsInfo()
	}

	onCreateAnimal(form: IAnimalsUnitInfo): void {
		this.item = {
			image: form.image,
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

		this.apiServices.postNewAnimal(this.item).subscribe(response => {
			this.dialogRef.close(response)
			this.notifierService.showSuccessNotification('Тваринку успішно додано', 'Ok')
		})
	}
}

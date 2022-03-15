import { Component, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { IAnimalsInfo } from '@shared/interfaces/animals'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NotifierService } from '@shared/services/notifier.service'
import { UploaderComponent } from '../uploader/uploader.component'
import { UploadTaskComponent } from '../upload-task/upload-task.component'

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
	@ViewChild('photo', { static: true }) photo: UploadTaskComponent
	item: IAnimalsUnitInfo
	testLink = ''
	public petsInfo$: Observable<IAnimalsInfo[]>
	// curators: any[] = ['Куратор 1', 'Куратор 2']
	// genders = ['M', 'F']
	ngOnInit(): void {
		this.petsInfo$ = this.apiServices.getAnimalsInfo()
		this.testLink = this.photo.downloadURL
		console.log(this.testLink)
	}

	onCreateAnimal(form: IAnimalsUnitInfo): void {
		this.item = {
			image: this.testLink,
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
		console.log(this.item.image)
		this.apiServices.postNewAnimal(this.item).subscribe(response => {
			this.dialogRef.close(response)
			this.notifierService.showSuccessNotification('Тваринку успішно додано', 'Ok')
		})
	}
	addValue(event) {
		this.testLink = event
		console.log(event)
	}
}

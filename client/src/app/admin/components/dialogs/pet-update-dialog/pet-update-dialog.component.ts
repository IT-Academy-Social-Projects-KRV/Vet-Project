import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IAnimalsUnitInfo } from '@shared/interfaces/animals-unit'
import { ApiServices } from '@shared/services/api.service'

@Component({
	selector: 'app-pet-update-dialog',
	templateUrl: './pet-update-dialog.component.html',
	styleUrls: ['./pet-update-dialog.component.scss']
})
export class PetUpdateDialogComponent {
	constructor(
		private apiServices: ApiServices,
		public dialogRef: MatDialogRef<IAnimalsUnitInfo>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	closeDialog() {
		this.dialogRef.close()
	}

	onUpdate(form: IAnimalsUnitInfo): void {
		this.data = {
			id: form.id,
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

		this.apiServices.putEditAnimal(this.data).subscribe()
		this.dialogRef.close()
	}
}

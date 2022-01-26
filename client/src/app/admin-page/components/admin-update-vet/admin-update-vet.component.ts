import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IVetsInfo, IVetServices } from '@shared/interfaces/vetInfo'
import { IVetsUnitInfo } from '@shared/interfaces/vets-unit'
import { ApiServices } from '@shared/services/api.service'
import { map, Observable } from 'rxjs'
import { VetsModule } from 'src/app/vets/vets.module'
import { UpdateVetComponent } from '../update-vet/update-vet.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
	selector: 'app-admin-update-vet',
	templateUrl: './admin-update-vet.component.html',
	styleUrls: ['./admin-update-vet.component.scss']
})
export class AdminUpdateVetComponent implements OnInit {
	displayedColumns: string[] = ['id', 'title', 'adress']

	vetsInfo$: Observable<any>

	constructor(private apiServices: ApiServices, private _dialog: MatDialog) {}

	ngOnInit(): void {
		this.vetsInfo$ = this.apiServices.getVetDetails()
	}
	openDialog(row: IVetsInfo) {
		const dialog = this._dialog.open(UpdateVetComponent, {
			width: '800px',
			// Can be closed only by clicking the close button
			disableClose: true,
			data: row
		})
	}
}

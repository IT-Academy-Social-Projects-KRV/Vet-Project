import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { IVetsInfo } from '@shared/interfaces/vetInfo'

@Component({
	selector: 'app-vet-list',
	templateUrl: './vet-list.component.html',
	styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent {
	@Input() clinicsInfo$: Observable<IVetsInfo[]>
}

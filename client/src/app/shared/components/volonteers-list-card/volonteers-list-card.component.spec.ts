import { ComponentFixture, TestBed } from '@angular/core/testing'
import { VolonteersListCardComponent } from './volonteers-list-card.component'
import { IVolonteersInfo } from '@shared/interfaces/volonteers'
import { MatCardModule } from '@angular/material/card'
import { AppRoutingModule } from 'src/app/app-routing.module'

describe('VolonteersListCardComponent', () => {
	let component: VolonteersListCardComponent
	let fixture: ComponentFixture<VolonteersListCardComponent>
	const mockIVolonteersInfo: IVolonteersInfo = {
		id: 1,
		first_name: '',
		last_name: '',
		email: '',
		number: '',
		city: ''
	}
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VolonteersListCardComponent],
			imports: [MatCardModule, AppRoutingModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VolonteersListCardComponent)
		component = fixture.componentInstance
		component.volonteersInfo = mockIVolonteersInfo
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

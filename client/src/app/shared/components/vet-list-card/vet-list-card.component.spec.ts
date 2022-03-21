/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'

import { VetListCardComponent } from './vet-list-card.component'
import { IVetsInfo } from '@shared/interfaces/vetInfo'
import { AppRoutingModule } from 'src/app/app-routing.module'

const mockVetsInfo: IVetsInfo = {
	id: 1,
	title: 'Vet',
	adress: 'konovalthau32',
	phone: '0964359867',
	email: 'sample@gmail.com',
	map_link: 'link',
	animal_type: 'dsdsdsds'
}

describe('VetListCardComponent', () => {
	let component: VetListCardComponent
	let fixture: ComponentFixture<VetListCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetListCardComponent],
			imports: [MatCardModule, AppRoutingModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetListCardComponent)
		component = fixture.componentInstance
		component.vetsInfo = mockVetsInfo
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

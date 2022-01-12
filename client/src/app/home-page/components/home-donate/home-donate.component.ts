import { Component, OnInit } from '@angular/core'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

@Component({
	selector: 'app-home-donate',
	templateUrl: './home-donate.component.html',
	styleUrls: ['./home-donate.component.scss']
})
export class HomeDonateComponent implements OnInit {
	amount: any

	constructor() {}
	ngOnInit(): void {}
	addValue(value: number) {
		this.amount = value
	}

	onClickSubmit() {
		if (this.amount == '') {
			Notify.failure('You have to choose something, please =)')
			return
		}
		Notify.success(`Thank you for the Donate in ${this.amount} points`)

		this.amount = ''
	}
}

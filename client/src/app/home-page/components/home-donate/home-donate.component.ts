import { Component } from '@angular/core'

@Component({
	selector: 'app-home-donate',
	templateUrl: './home-donate.component.html',
	styleUrls: ['./home-donate.component.scss']
})
export class HomeDonateComponent {
	amount: any

	addValue(value: number) {
		this.amount = value
	}

	onClickSubmit() {}
}

import { Component } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

@Component({
	selector: 'app-home-donate',
	templateUrl: './home-donate.component.html',
	styleUrls: ['./home-donate.component.scss']
})
export class HomeDonateComponent {
	constructor(private toastr: ToastrService) {}
	amount: any = ''

	addValue(value: number) {
		this.amount = value
	}

	onClickSubmit() {
		if (this.amount == '') {
			this.toastr.warning('Введіть або виберіть суму, будь ласка)')
		} else {
			this.toastr.success(`Дякуємо за Ваш платіж у розмірі ${this.amount} грн)`)
		}
		this.amount = ''
	}
}

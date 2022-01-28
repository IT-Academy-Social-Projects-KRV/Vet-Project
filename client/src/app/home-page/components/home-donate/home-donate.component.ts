import { Component } from '@angular/core'
import { NotifierService } from 'src/app/notifier.service'

@Component({
	selector: 'app-home-donate',
	templateUrl: './home-donate.component.html',
	styleUrls: ['./home-donate.component.scss']
})
export class HomeDonateComponent {
	constructor(private notifierService: NotifierService) {}
	amount: number | undefined = undefined

	addValue(value: number) {
		this.amount = value
	}

	onClickSubmit() {
		console.log(this.amount)
		if (this.amount == undefined) {
			this.notifierService.showInfoNotification('Виберіть суму донату, будь ласка', 'Ok')
		} else {
			this.notifierService.showSuccessNotification(
				`Дякуємо за донат у розмірі ${this.amount} грн. =)`,
				'Ok'
			)
			this.amount = undefined
		}
	}
}

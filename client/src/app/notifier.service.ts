import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
	providedIn: 'root'
})
export class NotifierService {
	constructor(public snackBar: MatSnackBar) {}

	showAnimalResultNotification(displayMessage: string, buttonText: string) {
		this.snackBar.open(displayMessage, buttonText, {
			duration: 5000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: 'success'
		})
	}
	showAnimalInfoNotification(displayMessage: string, buttonText: string) {
		this.snackBar.open(displayMessage, buttonText, {
			duration: 5000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: 'info'
		})
	}
	showNotification() {
		alert(3)
	}
}

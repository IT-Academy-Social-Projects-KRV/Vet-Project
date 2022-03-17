/* eslint-disable no-debugger */
import { Component, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-uploader',
	templateUrl: './uploader.component.html',
	styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
	isHovering: boolean

	link: string = this.router.url

	files: File[] = []
	@Output() test = new EventEmitter<string>()

	constructor(private router: Router) {}

	toggleHover(event: boolean) {
		this.isHovering = event
	}
	sentValue() {
		this.test.emit('value')
	}

	onDrop(files: FileList) {
		for (let i = 0; i < files.length; i++) {
			this.files.push(files.item(i))
		}
	}
	addImage(e) {
		this.test.emit(e)
	}
}

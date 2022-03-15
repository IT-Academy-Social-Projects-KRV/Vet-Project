import { Component, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

@Component({
	selector: 'app-uploader',
	templateUrl: './uploader.component.html',
	styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
	isHovering: boolean

	files: File[] = []
	@Output() test = new EventEmitter<string>()

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

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { finalize, tap } from 'rxjs/operators'

@Component({
	selector: 'app-upload-task',
	templateUrl: './upload-task.component.html',
	styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
	@Input() file: File
	@Output() photo = new EventEmitter<string>()

	task: AngularFireUploadTask

	percentage: Observable<number>
	snapshot: Observable<any>
	downloadURL: string

	animals = 'assets/animalsPictures'

	constructor(private storage: AngularFireStorage, private db: AngularFirestore) {}

	ngOnInit() {
		this.startUpload()
	}

	startUpload() {
		// The storage path
		const path = `${this.animals}/${Date.now()}_${this.file.name}`

		// Reference to storage bucket
		const ref = this.storage.ref(path)

		// The main task
		this.task = this.storage.upload(path, this.file)

		// Progress monitoring
		this.percentage = this.task.percentageChanges()

		this.snapshot = this.task.snapshotChanges().pipe(
			// The file's download URL
			finalize(async () => {
				this.downloadURL = await ref.getDownloadURL().toPromise()
				this.sentFirstComponent()
				// this.photo.emit('test')

				this.db.collection('files').add({ downloadURL: this.downloadURL, path })
			})
		)
	}
	sentFirstComponent() {
		this.photo.emit(this.downloadURL)
	}

	isActive(snapshot) {
		return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
	}
}

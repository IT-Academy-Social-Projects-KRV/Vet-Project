/* eslint-disable no-debugger */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'
import { UploaderService } from '../uploader/uploader.service'
@Component({
	selector: 'app-upload-task',
	templateUrl: './upload-task.component.html',
	styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
	@Input() file: File
	@Output() photo = new EventEmitter<string>()

	task: AngularFireUploadTask

	public pageUrl = ''
	folderWay = ''

	percentage: Observable<number>
	snapshot: Observable<any>
	downloadURL: string

	animals = 'assets/animalsPictures'
	vets = 'assets/vetsPhoto'
	volonteers = 'assets/volonteersPictures'

	constructor(
		private storage: AngularFireStorage,
		private db: AngularFirestore,
		private UploaderService: UploaderService
	) {
		this.UploaderService.getUrl$.subscribe(data => {
			console.log(data)
			this.pageUrl = data // And he have data here too!
		})
	}

	ngOnInit() {
		this.chooseUrl()
		this.startUpload()
	}

	chooseUrl() {
		if (this.pageUrl === '/admin/edit-pet') {
			this.folderWay = this.animals
		} else if (this.pageUrl === '/admin/edit-vet') {
			this.folderWay = this.vets
		} else if (this.pageUrl === '/admin/edit-volonteer') {
			this.folderWay = this.volonteers
		}
	}

	startUpload() {
		// The storage path
		const path = `${this.folderWay}/${Date.now()}_${this.file.name}`

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

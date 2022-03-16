import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { VetAddDialogComponent } from './vet-add-dialog.component'
import {
	MatDialog,
	MatDialogActions,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Overlay } from '@angular/cdk/overlay'
import { FormsModule } from '@angular/forms'

describe('VetAddDialogComponent', () => {
	let component: VetAddDialogComponent
	let fixture: ComponentFixture<VetAddDialogComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VetAddDialogComponent],
			providers: [
				HttpClient,
				HttpHandler,
				MatDialog,
				MatSnackBar,
				Overlay,
				MatDialogActions,
				{
					provide: MatDialogRef,
					useValue: {}
				},
				{
					provide: MAT_DIALOG_DATA,
					useValue: {}
				}
			],
			imports: [FormsModule]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(VetAddDialogComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

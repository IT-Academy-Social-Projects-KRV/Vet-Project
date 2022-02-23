import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UniqPipe } from './pipes/uniq.pipe'

@NgModule({
	declarations: [UniqPipe],
	imports: [CommonModule],
	exports: [UniqPipe]
})
export class SharedModule {}

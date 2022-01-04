import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'

import { VetsRoutingModule } from './vets-routing.module';
import { VetListPageComponent } from './pages/vet-list-page/vet-list-page.component';
import { VetListCardComponent } from '../shared/components/vet-list-card/vet-list-card.component';
import { VetInfoService } from '../shared/services/vet-info.service';
import { VetUnitPageComponent } from './pages/vet-unit-page/vet-unit-page.component';

@NgModule({
  declarations: [
    VetListPageComponent,
    VetListCardComponent,
    VetUnitPageComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    VetsRoutingModule,
  ],
  providers: [VetInfoService],
})
export class VetsModule {}

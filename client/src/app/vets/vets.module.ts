import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { VetsRoutingModule } from './vets-routing.module'; 
import { VetListPageComponent } from './pages/vet-list-page/vet-list-page.component'; 
import { VetListCardComponent } from './components/vet-list-card/vet-list-card.component'; 
import { VetInfoService } from './shared/vet-info.service'; 

@NgModule({
  declarations: [
    VetListPageComponent,
    VetListCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    VetsRoutingModule
  ],
  providers: [
    VetInfoService
  ]
})
export class VetsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PetsRoutingModule } from './pets-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component';
import { AnimalListCardComponent } from '@shared/components/animal-list-card/animal-list-card.component';
import { AnimalUnitPageComponent } from './pages/animal-unit-page/animal-unit-page.component';

import { AnimalInfoService } from '@shared/services/animal-info.service';

@NgModule({
  declarations: [
    AnimalListPageComponent,
    AnimalListCardComponent,
    AnimalUnitPageComponent,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule, PetsRoutingModule],
  providers: [AnimalInfoService],
})
export class PetsModule {}

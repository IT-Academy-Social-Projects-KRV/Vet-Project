import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsRoutingModule } from './pets-routing.module';
import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component';
import { AnimalListCardComponent } from './components/animal-list-card/animal-list-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AnimalListPageComponent,
    AnimalListCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }

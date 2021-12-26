import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component';

const routes: Routes = [
  { 
    path: 'animalsList', 
    component: AnimalListPageComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PetsRoutingModule { }

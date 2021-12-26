import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page-layout/home-page/home-page.component';
import { VetListPageComponent } from './vets/pages/vet-list-page/vet-list-page.component';
import { AnimalListPageComponent } from './pets/animal-list-page/animal-list-page.component';

const routes: Routes = [
  { path: 'vetsList', component: VetListPageComponent },
  { path: 'animalsList', component: AnimalListPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

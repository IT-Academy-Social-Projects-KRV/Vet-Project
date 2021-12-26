import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page-layout/home-page/home-page.component';

const routes: Routes = [
  { 
    path: 'animalsList', 
    loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
  },
  { 
    path: 'vetsList', 
    loadChildren: () => import('./vets/vets.module').then(m => m.VetsModule)
  },
  { path: '', 
  component: HomePageComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

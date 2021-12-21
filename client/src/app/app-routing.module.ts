import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetListPageComponent } from './components/vet-list-page/vet-list-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'detailInfo', component: VetListPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

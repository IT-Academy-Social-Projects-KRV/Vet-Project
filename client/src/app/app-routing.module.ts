import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetListPageComponent } from './vet-list-page/vet-list-page.component';
import { HomeMainComponent } from './modules/home-page/home-main/home-main.component';

const routes: Routes = [
  { path: 'detailInfo', component: VetListPageComponent },
  { path: '', component: HomeMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

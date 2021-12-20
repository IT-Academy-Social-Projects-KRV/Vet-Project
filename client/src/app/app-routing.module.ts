import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetListPageComponent } from './vet-list-page/vet-list-page.component';

const routes: Routes = [
  { path: 'detailInfo', component: VetListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), AppRoutingModule],
  exports: [RouterModule],
})
export class HomeMainRoutingModule {}

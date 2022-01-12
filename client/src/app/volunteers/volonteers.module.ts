import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolonteersPageComponent } from './pages/volonteers-page/volonteers-page.component';
import { VolonteersListComponent } from './components/volonteers-list/volonteers-list.component';
import { VolonteersInfoService } from '@shared/services/volonteers-info.service';
import { VolonteersRoutingModule } from './volonteers-routing.module';



@NgModule({
  declarations: [
    VolonteersPageComponent,
    VolonteersListComponent
  ],
  imports: [
    CommonModule,
    VolonteersRoutingModule
  ],
  providers: [VolonteersInfoService]
})
export class VolonteersModule { }

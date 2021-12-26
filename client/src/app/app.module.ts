import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { VetListPageComponent } from './vets/pages/vet-list-page/vet-list-page.component';
import { VetListCardComponent } from './vets/components/vet-list-card/vet-list-card.component';
import { HeaderComponent } from './page-layout/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeMainComponent } from './page-layout/home-page/home-main/home-main.component';
import { PetSliderComponent } from './page-layout/home-page/pet-slider/pet-slider.component';
import { WrapperComponent } from './page-layout/wrapper/wrapper.component';
import { PetWantedSliderComponent } from './page-layout/home-page/pet-wanted-slider/pet-wanted-slider.component';
import { HomeDonateComponent } from './page-layout/home-page/home-donate/home-donate.component';
import { HomeAboutComponent } from './page-layout/home-page/home-about/home-about.component';
import { HomeNewsComponent } from './page-layout/home-page/home-news/home-news.component';
import { FooterComponent } from './page-layout/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { NewsCardComponent } from './page-layout/home-page/news-card/news-card.component';
import { HomePageComponent } from './page-layout/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    VetListPageComponent,
    VetListCardComponent,
    HeaderComponent,
    HomeMainComponent,
    PetSliderComponent,
    WrapperComponent,
    PetWantedSliderComponent,
    HomeDonateComponent,
    HomeAboutComponent,
    HomeNewsComponent,
    FooterComponent,
    NewsCardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VetListPageComponent } from './components/vet-list-page/vet-list-page.component';
import { VetListCardComponent } from './components/vet-list-card/vet-list-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeMainComponent } from './components/home-page/home-main/home-main.component';
import { HomeStatisticComponent } from './components/home-page/home-statistic/home-statistic.component';
import { PetSliderComponent } from './components/home-page/pet-slider/pet-slider.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PetWantedSliderComponent } from './components/home-page/pet-wanted-slider/pet-wanted-slider.component';
import { HomeDonateComponent } from './components/home-page/home-donate/home-donate.component';
import { HomeAboutComponent } from './components/home-page/home-about/home-about.component';
import { HomeNewsComponent } from './components/home-page/home-news/home-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { StatisticImagesComponent } from './components/statistic-images/statistic-images.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VetListPageComponent,
    VetListCardComponent,
    HeaderComponent,
    HomeMainComponent,
    HomeStatisticComponent,
    PetSliderComponent,
    WrapperComponent,
    PetWantedSliderComponent,
    HomeDonateComponent,
    HomeAboutComponent,
    HomeNewsComponent,
    FooterComponent,
    NewsCardComponent,
    StatisticImagesComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
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

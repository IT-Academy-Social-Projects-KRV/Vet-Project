import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/header/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeMainComponent } from './modules/home-page/home-main/home-main.component';
import { HomeStatisticComponent } from './modules/home-page/home-statistic/home-statistic.component';
import { PetSliderComponent } from './modules/home-page/pet-slider/pet-slider.component';
import { WrapperComponent } from './modules/home-page/wrapper/wrapper.component';
import {MatCardModule} from '@angular/material/card';
import { PetWantedSliderComponent } from './modules/home-page/pet-wanted-slider/pet-wanted-slider.component';
import { HomeDonateComponent } from './modules/home-page/home-donate/home-donate.component';
import { HomeAboutComponent } from './modules/home-page/home-about/home-about.component';
import { HomeNewsComponent } from './modules/home-page/home-news/home-news.component';
import { FooterComponent } from './modules/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { StatisticImagesComponent } from './components/statistic-images/statistic-images.component';

@NgModule({
  declarations: [
    AppComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

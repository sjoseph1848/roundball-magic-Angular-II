import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { GamesComponent } from './pages/games/games.component';
import { NewsComponent } from './pages/news/news.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GamesComponent,
    NewsComponent,
    StatsComponent,
    HeroComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

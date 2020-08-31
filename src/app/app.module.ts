import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { GamesComponent } from './pages/games/games.component';
import { NewsComponent } from './pages/news/news.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsComponent } from './components/details/details.component';
import { TodaysGamesComponent } from './components/games/todaysgames.component';
import { NewsHeadlineComponent } from './components/news-headline/news-headline.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GamesComponent,
    NewsComponent,
    StatsComponent,
    HeroComponent,
    DetailsComponent,
    TodaysGamesComponent,
    NewsHeadlineComponent,
    NewsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

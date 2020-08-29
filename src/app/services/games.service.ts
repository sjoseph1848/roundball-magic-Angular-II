import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private gamesUrl = 'https://roundball-magic.azurewebsites.net/api/games/today';

  games$ = this.http.get<Game[]>(this.gamesUrl)
    .pipe(
      tap(game => console.log(game))
    );

  constructor(private http: HttpClient) { }
}

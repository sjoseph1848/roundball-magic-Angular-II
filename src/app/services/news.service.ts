import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrl = 'https://roundball-magic.azurewebsites.net/api/news/today';

  news$ = this.http.get<News[]>(this.newsUrl)
    .pipe(
      tap(article => console.log(article))
    );
  constructor(private http: HttpClient) { }
}
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-todays-games',
  templateUrl: './todaysgames.component.html',
  styleUrls: ['./todaysgames.component.scss']
})
export class TodaysGamesComponent implements OnInit {


  games$ = this.gamesService.games$;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
  }

}

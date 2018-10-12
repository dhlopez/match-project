import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player:Player;
  playerStats:Player;
  errorMessage = '';

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer('erasmo').subscribe(
      player =>{
        this.player = player;
      },
      error => this.errorMessage = <any>error
    );
    this.playerService.getPlayerStats('erasmo').subscribe(
      playerStats =>{
        this.playerStats = playerStats;
      },
      error => this.errorMessage = <any>error
    );
  }

}

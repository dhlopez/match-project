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
  errorMessage = '';

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer('dhelaman@hotmail.com').subscribe(
      player =>{
        this.player = player;
      },
      error => this.errorMessage = <any>error
      
    );
    console.log(this.player);
    console.log(this.errorMessage);
  }

}

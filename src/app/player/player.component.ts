import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';


export interface Platform {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  player:Player | undefined;
  playerStats:Player | undefined;
  errorMessage = '';
  playerForm: FormGroup;
  selectedPlatform:string;

  platforms: Platform[] = [
    {value: 'pc', viewValue: 'PC'},
    {value: 'ps4', viewValue: 'Play Station 4'},
    {value: 'xb1', viewValue: 'Xbox 1'}
  ];

  get tags(): FormArray {
    return <FormArray>this.playerForm.get('tags');
  }

  constructor(private playerService:PlayerService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.playerForm = this.fb.group({
      username: ['', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]]
    });
    
    //this.getPlayerCall();    
  }
  
  //getters are called right away and linked to the form group with the same name
  get username() { return this.playerForm.get('username'); }
  

  showPlayer()
  {
    console.info(this.player);
    //if error is defined, it means the retrieve failed
    //then handle the error
    console.info(this.playerStats['error']);
  }

  getPlayerCall():void{   
    this.playerService.getPlayer(this.playerForm.controls.username.value).subscribe(
      player =>{
        this.player = player;
          this.playerService.getPlayerStats(this.player.uid, this.selectedPlatform).subscribe(
            playerStats =>{
              this.playerStats = playerStats;
              },
              error => this.errorMessage = <any>error
          );
        },
        error => this.errorMessage = <any>error
    );
  }

}

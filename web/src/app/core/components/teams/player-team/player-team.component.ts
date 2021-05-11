import {Component, OnInit} from '@angular/core';
import {AbstractTeam, TeamDefinition} from '../Teams';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-player-team',
  templateUrl: './player-team.component.html',
  styleUrls: ['./player-team.component.sass']
})
export class PlayerTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog) {
    super(dialog, TeamDefinition.PLAYER);
  }

  ngOnInit(): void {
  }

  print(): void {
    console.log(this.activePokemon?.baseStats);
  }

}

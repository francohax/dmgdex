import {Component, OnInit} from '@angular/core';
import {AbstractTeam, TeamDefinition} from '../Teams';
import {MatDialog} from '@angular/material/dialog';
import {StatCalculationService} from '../../../services/stat-calculation/stat-calculation.service';

@Component({
  selector: 'app-player-team',
  templateUrl: './player-team.component.html',
  styleUrls: ['./player-team.component.sass']
})
export class PlayerTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog, statService: StatCalculationService) {
    super(dialog, statService, TeamDefinition.PLAYER);
  }

  ngOnInit(): void {
  }

  print(): void {
    console.log(this.activePokemon?.baseStats);
  }

}

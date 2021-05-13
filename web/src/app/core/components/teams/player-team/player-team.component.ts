import {Component, OnInit} from '@angular/core';
import {AbstractTeam} from '../Teams';
import {MatDialog} from '@angular/material/dialog';
import {StatCalculationService} from '../../../services/stat-calculation/stat-calculation.service';
import {TeamTypeEnum} from '../../../models/enums/TeamTypeEnum';
import {NatureService} from '../../../services/nature/nature.service';

@Component({
  selector: 'app-player-team',
  templateUrl: './player-team.component.html',
  styleUrls: ['./player-team.component.sass']
})
export class PlayerTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog, statService: StatCalculationService, natureService: NatureService) {
    super(dialog, statService, natureService, TeamTypeEnum.PLAYER);
  }

  ngOnInit(): void {
  }

  print(): void {
    console.log(this.activePokemon?.baseStats);
  }

}

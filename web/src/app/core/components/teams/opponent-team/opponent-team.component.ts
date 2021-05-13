import {Component, OnInit} from '@angular/core';
import {AbstractTeam} from '../Teams';
import {MatDialog} from '@angular/material/dialog';
import {StatCalculationService} from '../../../services/stat-calculation/stat-calculation.service';
import {TeamTypeEnum} from '../../../models/enums/TeamTypeEnum';

@Component({
  selector: 'app-opponent-team',
  templateUrl: './opponent-team.component.html',
  styleUrls: ['./opponent-team.component.sass']
})
export class OpponentTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog, statService: StatCalculationService) {
    super(dialog, statService, TeamTypeEnum.OPPONENT);
  }

  ngOnInit(): void {
  }
}

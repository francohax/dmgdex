import {Component, OnInit} from '@angular/core';
import {AbstractTeam} from '../Teams';
import {MatDialog} from '@angular/material/dialog';
import {StatCalculationService} from '../../../services/stat-calculation/stat-calculation.service';
import {TeamTypeEnum} from '../../../models/enums/TeamTypeEnum';
import {NatureService} from '../../../services/nature/nature.service';

@Component({
  selector: 'app-opponent-team',
  templateUrl: './opponent-team.component.html',
  styleUrls: ['./opponent-team.component.sass']
})
export class OpponentTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog, statService: StatCalculationService, natureService: NatureService) {
    super(dialog, statService, natureService, TeamTypeEnum.OPPONENT);
  }

  ngOnInit(): void {
  }
}

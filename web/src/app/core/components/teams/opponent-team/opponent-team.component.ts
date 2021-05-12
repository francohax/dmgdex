import {Component, OnInit} from '@angular/core';
import {AbstractTeam, TeamDefinition} from '../Teams';
import {MatDialog} from '@angular/material/dialog';
import {StatCalculationService} from '../../../services/stat-calculation/stat-calculation.service';

@Component({
  selector: 'app-opponent-team',
  templateUrl: './opponent-team.component.html',
  styleUrls: ['./opponent-team.component.sass']
})
export class OpponentTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog, statService: StatCalculationService) {
    super(dialog, statService, TeamDefinition.OPPONENT);
  }

  ngOnInit(): void {
  }
}

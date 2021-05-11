import {Component, OnInit} from '@angular/core';
import {AbstractTeam, TeamDefinition} from '../Teams';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-opponent-team',
  templateUrl: './opponent-team.component.html',
  styleUrls: ['./opponent-team.component.sass']
})
export class OpponentTeamComponent extends AbstractTeam implements OnInit {

  constructor(dialog: MatDialog) {
    super(dialog, TeamDefinition.OPPONENT);
  }

  ngOnInit(): void {
  }
}

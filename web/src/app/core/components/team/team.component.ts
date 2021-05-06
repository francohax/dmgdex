import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../models/BasePokemon';
import {PokemonSearchModalComponent} from '../pokemon-search-modal/pokemon-search-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  activeNodeIndex?: number;
  activePokemon?: Pokemon;
  team = new Array<Pokemon>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  updateActivePokemon(index: number): void {
    this.activeNodeIndex = index;
    this.activePokemon = this.team[this.activeNodeIndex];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PokemonSearchModalComponent, { panelClass: 'custom-dialog-container' } );

    dialogRef.afterClosed().subscribe(response => {
      const data: Pokemon = new Pokemon(response.data);
      const teamContains = this.team.some(p => p.id === data.id);
      if (!teamContains) {
        this.team?.push(data);
      }
      this.activePokemon = data;
      this.activeNodeIndex = this.team.length - 1;
    });
  }
}

import {Pokemon} from '../../models/BasePokemon';
import {EventEmitter} from '@angular/core';
import {PokemonSearchModalComponent} from '../pokemon-search-modal/pokemon-search-modal.component';
import {MatDialog} from '@angular/material/dialog';

export enum TeamDefinition {
  PLAYER = 'player',
  OPPONENT = 'opponent'
}

export interface Team {
  definition: TeamDefinition;
  team: Array<Pokemon>;
  dirtyEvent: EventEmitter<boolean>;

  isDirty(): void;
  openSearch(): void;
  updateActivePokemon(index: number): void;
}

export class AbstractTeam implements Team {
  definition: TeamDefinition;
  team = new Array<Pokemon>();
  dirtyEvent = new EventEmitter<boolean>();

  activeNodeIndex?: number;
  activePokemon?: Pokemon;

  constructor(public dialog: MatDialog, definition: TeamDefinition) {
    this.definition = definition;
  }

  isDirty(): void {
    const dirty = this.team.length > 0;
    if (this.team.length === 1) {
      this.dirtyEvent.emit(dirty);
    }
  }

  updateActivePokemon(index: number): void {
    this.activeNodeIndex = index;
    this.activePokemon = this.team[this.activeNodeIndex];
  }

  openSearch(): void {
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
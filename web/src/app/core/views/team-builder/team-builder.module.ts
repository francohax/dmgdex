import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamBuilderComponent } from './team-builder.component';
import { PokemonSearchModalComponent } from '../../components/pokemon-search-modal/pokemon-search-modal.component';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [TeamBuilderComponent, PokemonSearchModalComponent, PokemonCardComponent],
  imports: [
    CommonModule
  ]
})
export class TeamBuilderModule { }
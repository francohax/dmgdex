import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamBuilderComponent} from './team-builder.component';
import {PokemonSearchModalComponent} from '../../components/pokemon-search-modal/pokemon-search-modal.component';
import {PokemonCardComponent} from '../../components/pokemon-card/pokemon-card.component';
import {MatButtonModule} from '@angular/material/button';
import {TeamComponent} from '../../components/team/team.component';
import {TeamNodeComponent} from '../../components/team-node/team-node.component';
import {TargetsComponent} from '../../components/targets/targets.component';
import {TargetNodeComponent} from '../../components/target-node/target-node.component';

@NgModule({
  declarations: [
    TeamBuilderComponent, PokemonSearchModalComponent, PokemonCardComponent,
    TeamComponent, TeamNodeComponent, TargetsComponent, TargetNodeComponent
  ],
  exports: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class TeamBuilderModule {
}

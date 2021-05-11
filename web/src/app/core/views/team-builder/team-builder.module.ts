import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamBuilderComponent} from './team-builder.component';
import {PokemonSearchModalComponent} from '../../components/pokemon-search-modal/pokemon-search-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {TeamNodeComponent} from '../../components/team-node/team-node.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {ConfigPanelContainerComponent} from '../../components/config-panel/config-panel-container/config-panel-container.component';
import {MoveConfigPanelComponent} from '../../components/config-panel/move-config-panel/move-config-panel.component';
import {EvConfigPanelComponent} from '../../components/config-panel/ev-config-panel/ev-config-panel.component';
import {IvConfigPanelComponent} from '../../components/config-panel/iv-config-panel/iv-config-panel.component';
import {PlayerTeamComponent} from '../../components/teams/player-team/player-team.component';
import {OpponentTeamComponent} from '../../components/teams/opponent-team/opponent-team.component';

@NgModule({
  declarations: [
    TeamBuilderComponent, PokemonSearchModalComponent,
    PlayerTeamComponent, OpponentTeamComponent,
    TeamNodeComponent, ConfigPanelContainerComponent, MoveConfigPanelComponent,
    EvConfigPanelComponent, IvConfigPanelComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ]
})
export class TeamBuilderModule {
}

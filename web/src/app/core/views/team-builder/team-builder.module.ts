import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamBuilderComponent} from './team-builder.component';
import {PokemonSearchModalComponent} from '../../components/pokemon-search-modal/pokemon-search-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {TeamComponent} from '../../components/team/team.component';
import {TeamNodeComponent} from '../../components/team-node/team-node.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {ConfigPanelContainerComponent} from '../../components/config-panel/config-panel-container/config-panel-container.component';
import {MoveConfigPanelComponent} from '../../components/config-panel/move-config-panel/move-config-panel.component';
import {EvConfigPanelComponent} from '../../components/config-panel/ev-config-panel/ev-config-panel.component';
import {IvConfigPanelComponent} from '../../components/config-panel/iv-config-panel/iv-config-panel.component';

@NgModule({
  declarations: [
    TeamBuilderComponent, PokemonSearchModalComponent,
    TeamComponent, TeamNodeComponent,
    ConfigPanelContainerComponent, MoveConfigPanelComponent,
    EvConfigPanelComponent, IvConfigPanelComponent
  ],
  exports: [
    TeamComponent
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

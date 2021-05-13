import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractConfigPanel, ConfigPanelDefinition} from '../ConfigPanels';
import {dummyBasePokemon, Pokemon} from '../../../models/BasePokemon';
import {Stats} from '../../../models/Stats';
import {StatEnum} from '../../../models/enums/StatEnum';

@Component({
  selector: 'app-iv-config-panel',
  templateUrl: './iv-config-panel.component.html',
  styleUrls: ['./iv-config-panel.component.sass']
})
export class IvConfigPanelComponent extends AbstractConfigPanel implements OnInit {
  @Input()
  activePokemon: Pokemon;
  @Output()
  updateEvent = new EventEmitter<Pokemon>();

  constructor() {
    super(ConfigPanelDefinition.IVS);
    this.activePokemon = new Pokemon(dummyBasePokemon);
  }

  ngOnInit(): void {
  }

  updateValues<T extends Stats>(event: any, stats: T, stat: StatEnum): void {
    if (!this.activePokemon) {
      return;
    }

    this.activePokemon.ivs.stats.set(stat, event.value);
    this.updateEvent.emit(this.activePokemon);
  }
}

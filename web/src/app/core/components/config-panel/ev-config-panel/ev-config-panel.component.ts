import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractConfigPanel, ConfigPanelDefinition} from '../ConfigPanels';
import {dummyBasePokemon, Pokemon} from '../../../models/BasePokemon';
import {StatEnum, Stats} from '../../../models/Stats';

@Component({
  selector: 'app-ev-config-panel',
  templateUrl: './ev-config-panel.component.html',
  styleUrls: ['./ev-config-panel.component.sass']
})
export class EvConfigPanelComponent extends AbstractConfigPanel implements OnInit {
  @Input()
  activePokemon: Pokemon;
  @Output()
  updateEvent = new EventEmitter<Pokemon>();

  constructor() {
    super(ConfigPanelDefinition.EVS);
    this.activePokemon = new Pokemon(dummyBasePokemon);
  }

  ngOnInit(): void {
  }

  updateValues<T extends Stats>(event: any, stats: T, stat: StatEnum): void {
    if (!this.activePokemon) {
      return;
    }

    const currEvValue = stats.stats.get(stat);
    if (typeof currEvValue !== 'number') {
      return;
    }

    if (stats.total - currEvValue + event.value <= 510) {
      this.activePokemon.evs.stats.set(stat, event.value);
    } else {
      const ticks = Math.trunc((510 - stats.total) / 4);
      if (ticks > 0) {
        this.activePokemon.evs.stats.set(stat, (ticks * 4) + currEvValue);
      }
    }
    this.activePokemon.evs.updateAndGetTotal();
    this.updateEvent.emit(this.activePokemon);
  }

}

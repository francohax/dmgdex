import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractConfigPanel, ConfigPanelDefinition} from '../ConfigPanels';
import {dummyBasePokemon, Pokemon} from '../../../models/BasePokemon';
import {Stats} from '../../../models/Stats';

@Component({
  selector: 'app-move-config-panel',
  templateUrl: './move-config-panel.component.html',
  styleUrls: ['./move-config-panel.component.sass']
})
export class MoveConfigPanelComponent extends AbstractConfigPanel implements OnInit {
  @Input()
  activePokemon: Pokemon;
  @Output()
  updateEvent = new EventEmitter<Pokemon>();


  constructor() {
    super(ConfigPanelDefinition.MOVE);
    this.activePokemon = new Pokemon(dummyBasePokemon);
  }

  ngOnInit(): void {
  }

  updateValues<T extends Stats>(event: any, stats: T, stat: string): void {
    console.log(typeof stats);
  }
}

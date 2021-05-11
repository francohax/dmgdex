import {EventEmitter} from '@angular/core';
import {Pokemon} from '../../models/BasePokemon';
import {StatEnum, Stats} from '../../models/Stats';

export enum ConfigPanelDefinition {
  MOVE = 'Moves',
  EVS = 'EVs',
  IVS = 'IVs'
}

export interface ConfigPanel {
  definition: ConfigPanelDefinition;
  activePokemon: Pokemon;
  updateEvent: EventEmitter<Pokemon>;
  updateValues<T extends Stats>(event: any, stats: T, stat: string): void;
}

export abstract class AbstractConfigPanel implements ConfigPanel {
  definition: ConfigPanelDefinition;
  abstract activePokemon: Pokemon;
  abstract updateEvent: EventEmitter<Pokemon>;

  constructor(definition: ConfigPanelDefinition) {
    this.definition = definition;
  }

  abstract updateValues<T extends Stats>(event: any, stats: T, stat: StatEnum): void;
}

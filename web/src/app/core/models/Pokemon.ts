import {Type} from './Type';
import {Move} from './Move';
import {EVStats, IVStats, Stats} from './Stats';
import {Ability} from './Ability';
import {NatureEnum} from './NatureDefinition';
import {Item} from './Item';

export interface Pokemon {
    id: number;
    name: string;
    typing: Type | [Type, Type];
    moves: Array<Move>;
    baseStats: Stats;
    abilities: Array<Ability>;
}

export interface SelectedPokemon extends Pokemon {
    selectedMoves: Array<Move>;
    ivs: IVStats;
    evs: EVStats;
    nature: NatureEnum;
    ability: Ability;
    item: Item;
}

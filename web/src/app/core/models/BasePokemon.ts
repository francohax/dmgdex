import {BaseStats, dummyBaseStats, EffortValues, IndividualValues, Stats} from './Stats';
import {Move} from './Move';

export class BasePokemon {
  id: number;
  name: string;
  stats: BaseStats;
  typing: ReferenceList;
  moves: ReferenceList;
  abilities: ReferenceList;

  constructor(id: number, name: string, baseStats: any, typing: any[], moves: any[], abilities: any[]) {
    this.id = id;
    this.name = name;
    this.stats = new BaseStats(baseStats.hp, baseStats.atk, baseStats.def, baseStats.spAtk, baseStats.spDef, baseStats.speed);
    this.typing = new ReferenceList(typing);
    this.moves = new ReferenceList(moves);
    this.abilities = new ReferenceList(abilities);
  }
}

export class Pokemon extends BasePokemon {
  evs: EffortValues = new EffortValues();
  ivs: IndividualValues = new IndividualValues();
  selectedMoves: Array<Move> = new Array<Move>();

  constructor(base: BasePokemon) {
    super(base.id, base.name, base.stats, base.typing.keyNamePairList, base.moves.keyNamePairList, base.abilities.keyNamePairList);
  }
}

export class ReferenceKeyName {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get key(): number {
    return this._key;
  }

  set key(value: number) {
    this._key = value;
  }
  private _key: number;
  private _name: string;

  constructor(key: number, name: string) {
    this._key = key;
    this._name = name;
  }
}

export class ReferenceList {
  get keyNamePairList(): Array<ReferenceKeyName> {
    return this._keyNamePairList;
  }

  set keyNamePairList(value: Array<ReferenceKeyName>) {
    this._keyNamePairList = value;
  }
  private _keyNamePairList: Array<ReferenceKeyName>;

  constructor(list: any[]) {
    this._keyNamePairList = [];
    for (const v of list) {
      this._keyNamePairList.push(new ReferenceKeyName(v.idx, v.name));
    }
  }
}

export const dummyBasePokemon = new BasePokemon(-1, 'Missingno', dummyBaseStats, ['normal'], ['tackle'], ['torrent']);

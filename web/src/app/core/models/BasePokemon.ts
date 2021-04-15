import {BaseStats} from './Stats';

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

export class ReferenceKeyName {
  key: number;
  name: string;

  constructor(key: number, name: string) {
    this.key = key;
    this.name = name;
  }
}

export class ReferenceList {
  keyNamePairList: Array<ReferenceKeyName>;

  constructor(list: any[]) {
    this.keyNamePairList = [];
    for (const v of list) {
      this.keyNamePairList.push(new ReferenceKeyName(v.idx, v.name));
    }
  }
}

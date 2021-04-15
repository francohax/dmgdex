import {BaseStats} from './Stats';

export class Pokemon {
    id: number;
    name: string;
    typing: KeyNameList;
    moves: KeyNameList;
    stats: BaseStats;
    abilities: KeyNameList;

    constructor(id: number, name: string, typing: any[], moves: any[], baseStats: any, abilities: any[]) {
      this.id = id;
      this.name = name;
      this.typing = new KeyNameList(typing);
      this.moves = new KeyNameList(moves);
      this.stats = new BaseStats(baseStats.hp, baseStats.atk, baseStats.def, baseStats.spAtk, baseStats.spDef, baseStats.speed);
      this.abilities = new KeyNameList(abilities);
    }
}

export class KeyName {
  idx: number;
  name: string;

  constructor(idx: number, name: string) {
    this.idx = idx;
    this.name = name;
  }
}

export class KeyNameList {
  keyNamePairList: Array<KeyName>;

  constructor(list: any[]) {
    this.keyNamePairList = [];
    for (const v of list) {
      this.keyNamePairList.push(new KeyName(v.idx, v.name));
    }
  }
}

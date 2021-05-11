export enum StatEnum {
  HP = 'HP',
  ATK = 'Atk',
  DEF = 'Def',
  SP_ATK = 'SpA',
  SP_DEF = 'SpD',
  SPEED = 'Spe'
}

export abstract class Stats {
  public stats = new Map<StatEnum, number>();
  public total: number;

  protected constructor(hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number) {
    this.stats.set(StatEnum.HP, hp);
    this.stats.set(StatEnum.ATK, attack);
    this.stats.set(StatEnum.DEF, defense);
    this.stats.set(StatEnum.SP_ATK, specialAttack);
    this.stats.set(StatEnum.SP_DEF, specialDefense);
    this.stats.set(StatEnum.SPEED, speed);

    this.total = this.updateAndGetTotal();
  }

  validate(): boolean {
    return true;
  }

  updateAndGetTotal(): number {
    let total = 0;
    for (const v of this.stats.values()) {
      total += v;
    }
    this.total = total;
    return total;
  }
}

export class BaseStats extends Stats {
  constructor(hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number) {
    super(hp, attack, defense, specialAttack, specialDefense, speed);
  }
}

export const dummyBaseStats = new BaseStats(100, 100, 100, 100, 100, 100);

export class EffortValues extends Stats {
  constructor() {
    super(0, 0, 0, 0, 0, 0);
  }
}

export class IndividualValues extends Stats {
  constructor() {
    super(31, 31, 31, 31, 31, 31);
  }
}

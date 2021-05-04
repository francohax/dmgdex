export enum StatEnum {
  HP = 'HP',
  ATK = 'Atk',
  DEF = 'Def',
  SP_ATK = 'SpA',
  SP_DEF = 'SpD',
  SPEED = 'Spe'
}

export class Stat {
  stat: string;
  baseValue: number;
  #_value: number;

  constructor(statName: string, baseStatValue: number) {
    this.stat = statName;
    this.baseValue = baseStatValue;
    this.#_value = 0;
  }

  get value(): number {
    return this.#_value;
  }

  set value(value: number) {
    this.#_value = value;
  }
}

export abstract class Stats {
  protected _hp: Stat;
  protected _atk: Stat;
  protected _def: Stat;
  protected _spAtk: Stat;
  protected _spDef: Stat;
  protected _speed: Stat;
  protected _total: number;

  protected constructor(hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number) {
    this._total = hp + attack + defense + specialAttack + specialDefense + speed;
    this._hp = new Stat(StatEnum.HP, hp);
    this._atk = new Stat(StatEnum.ATK, attack);
    this._def = new Stat(StatEnum.DEF, defense);
    this._spAtk = new Stat(StatEnum.SP_ATK, specialAttack);
    this._spDef = new Stat(StatEnum.SP_DEF, specialDefense);
    this._speed = new Stat(StatEnum.SPEED, speed);
  }

  validate(): boolean {
    return true;
  }

  getAsList(): Array<Stat> {
    const stats = new Array<Stat>();
    stats.push(this._hp);
    stats.push(this._atk);
    stats.push(this._def);
    stats.push(this._spAtk);
    stats.push(this._spDef);
    stats.push(this._speed);

    return stats;
  }

  setByName(stat: string, value: number): void {
    this.getByName(stat).value = value;
  }

  getByName(stat: string): Stat {
    switch (stat) {
      case StatEnum.HP.valueOf():
        return this.hp;
      case StatEnum.ATK.valueOf():
        return this.atk;
      case StatEnum.DEF.valueOf():
        return this.def;
      case StatEnum.SP_ATK.valueOf():
        return this.spAtk;
      case StatEnum.SP_DEF.valueOf():
        return this.spDef;
      case StatEnum.SPEED.valueOf():
        return this.speed;
    }
    return new Stat('', 0);
  }

  getByDefinition(stat: StatEnum): Stat {
    return this.getByName(stat.valueOf());
  }

  getCurrentTotal(): number {
    let total = 0;
    for (const s of this.getAsList()) {
      total += s.value;
    }
    return total;
  }

  get hp(): Stat {
    return this._hp;
  }

  set hp(value: Stat) {
    this._hp = value;
  }

  get atk(): Stat {
    return this._atk;
  }

  set atk(value: Stat) {
    this._atk = value;
  }

  get def(): Stat {
    return this._def;
  }

  set def(value: Stat) {
    this._def = value;
  }

  get spAtk(): Stat {
    return this._spAtk;
  }

  set spAtk(value: Stat) {
    this._spAtk = value;
  }

  get spDef(): Stat {
    return this._spDef;
  }

  set spDef(value: Stat) {
    this._spDef = value;
  }

  get speed(): Stat {
    return this._speed;
  }

  set speed(value: Stat) {
    this._speed = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  abstract apply(value: number, stat: StatEnum): void;
}

export class BaseStats extends Stats {
  constructor(hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number) {
    super(hp, attack, defense, specialAttack, specialDefense, speed);
  }

  apply(value: number, stat: StatEnum): void {
    if (value > 255 || value < 0) {
      return;
    }
    const s = this.getByDefinition(stat);
    s.value = value;
  }
}

export const dummyBaseStats = new BaseStats(100, 100, 100, 100, 100, 100);

export class EffortValues extends Stats {
  constructor() {
    super(0, 0, 0, 0, 0, 0);
  }

  apply(value: number, stat: StatEnum): void {
    if (value > 252 || value < 0) {
      return;
    }
    const s = this.getByDefinition(stat);
    s.value = value;
  }
}

export class IndividualValues extends Stats {
  constructor() {
    super(31, 31, 31, 31, 31, 31);
  }

  apply(value: number, stat: StatEnum): void {
    if (value > 31 || value < 0) {
      return;
    }
    const s = this.getByDefinition(stat);
    s.value = value;
  }
}

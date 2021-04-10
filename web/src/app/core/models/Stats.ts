export enum Stat {
    HP = "HP",
    ATK = "Attack",
    DEF = "Defense",
    SP_ATK = "Special Attack",
    SP_DEF = "Special Defense",
    SPEED = "Speed"
}

export abstract class Stats {
    stats = new Map([
        [Stat.HP, 0],
        [Stat.ATK, 0], [Stat.DEF, 0],
        [Stat.SP_ATK, 0], [Stat.SP_DEF, 0],
        [Stat.SPEED, 0],
    ])

    protected constructor(hp: number, atk: number, def: number, spAtk: number, spDef: number, speed: number) {
        this.stats.set(Stat.HP, hp)
        this.stats.set(Stat.ATK, atk)
        this.stats.set(Stat.DEF, def)
        this.stats.set(Stat.SP_ATK, spAtk)
        this.stats.set(Stat.SP_DEF, spDef)
        this.stats.set(Stat.SPEED, speed)
    }

    abstract validate(): boolean;
}

export class BaseStats extends Stats {
    baseTotal = 0;
    constructor(hp: number, atk: number, def: number, spAtk: number, spDef: number, speed: number) {
        super(hp, atk, def, spAtk, spDef, speed);
        this.baseTotal = hp + atk + def + spAtk + spDef + speed;
    }

    validate(): boolean {
        for (const v of super.stats.values()) {
            if (!v || v > 255 || v < 0) return false;
        }
        return true;
    }
}

export class IVStats extends Stats {
    constructor(hp: number, atk: number, def: number, spAtk: number, spDef: number, speed: number) {
        super(hp, atk, def, spAtk, spDef, speed);
    }

    validate(): boolean {
        for (const v of super.stats.values()) {
            if (!v || v > 31 || v < 0) return false;
        }
        return true;
    }
}

export class EVStats extends Stats {
    constructor(hp: number, atk: number, def: number, spAtk: number, spDef: number, speed: number) {
        super(hp, atk, def, spAtk, spDef, speed);
    }

    validate(): boolean {
        let total = 0
        for (const v of super.stats.values()) {
            total += v
            if (!v || v > 252 || v < 0) return false;
        }
        return total < 510;
    }
}

export class Type {
    idx: number;
    name: string;
    damageDefinition?: TypeDamageDefinition;

    constructor(idx: number, name: string) {
      this.idx = idx;
      this.name = name;
    }
}

export interface TypeDamageDefinition {
    doubleDamageTo: Array<string>;
    doubleDamageFrom: Array<string>;
    halfDamageTo: Array<string>;
    halfDamageFrom: Array<string>;
    noDamageTo: Array<string>;
    noDamageFrom: Array<string>;
}

export interface Type {
    id: number;
    name: string;
    damageDefinition: TypeDamageDefinition;
}

export interface TypeDamageDefinition {
    doubleDamageTo: Array<string>;
    doubleDamageFrom: Array<string>;
    halfDamageTo: Array<string>;
    halfDamageFrom: Array<string>;
    noDamageTo: Array<string>;
    noDamageFrom: Array<string>;
}

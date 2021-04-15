import { Type } from './Type';

export interface Move {
    id: number;
    name: string;
    description: string;
    type: Type;
    baseDamage: number;
    accuracy: number;
    damageClass: MoveDamageClassificationEnum;
    pp: number;
    priority: number;
    target: string;
    effectFunction?: string;
}

export enum MoveDamageClassificationEnum {
    PHYSICAL,
    SPECIAL,
    STATUS
}

import {Type} from "@/models/Type";

export interface Move {
    id: number;
    name: string;
    type: Type;
    baseDamage: number;
    accuracy: number;
    damageClass: MoveDamageClassificationEnum;
    priority: number;
    effectFunction: string;
}

export enum MoveDamageClassificationEnum {
    PHYSICAL,
    SPECIAL,
    STATUS
}

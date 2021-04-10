import {Type} from "@/models/Type"
export interface Item {
    id: number;
    name: string;
    naturePowerType: Type;
    effectFunction: string;
}

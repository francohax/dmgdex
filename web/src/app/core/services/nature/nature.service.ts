import { Injectable } from '@angular/core';
import {Pokemon} from '../../models/BasePokemon';
import {NatureEnum} from '../../models/enums/NatureEnum';
import {StatEnum} from '../../models/enums/StatEnum';

@Injectable({
  providedIn: 'root'
})
export class NatureService {
  neutralNatures = [NatureEnum.BASHFUL, NatureEnum.DOCILE, NatureEnum.HARDY, NatureEnum.QUIRKY];

  natureDefinitions = new Map<NatureEnum, Array<StatEnum>>();
  constructor() {
    this.natureDefinitions.set(NatureEnum.ADAMANT, [StatEnum.ATK, StatEnum.SP_ATK]);
    this.natureDefinitions.set(NatureEnum.BRAVE, [StatEnum.ATK, StatEnum.SPEED]);
    this.natureDefinitions.set(NatureEnum.LONELY, [StatEnum.ATK, StatEnum.DEF]);
    this.natureDefinitions.set(NatureEnum.NAUGHTY, [StatEnum.ATK, StatEnum.SP_DEF]);

    this.natureDefinitions.set(NatureEnum.BOLD, [StatEnum.DEF, StatEnum.ATK]);
    this.natureDefinitions.set(NatureEnum.IMPISH, [StatEnum.DEF, StatEnum.SP_ATK]);
    this.natureDefinitions.set(NatureEnum.LAX, [StatEnum.DEF, StatEnum.SP_DEF]);
    this.natureDefinitions.set(NatureEnum.RELAXED, [StatEnum.DEF, StatEnum.SPEED]);

    this.natureDefinitions.set(NatureEnum.MODEST, [StatEnum.SP_ATK, StatEnum.ATK]);
    this.natureDefinitions.set(NatureEnum.MILD, [StatEnum.SP_ATK, StatEnum.DEF]);
    this.natureDefinitions.set(NatureEnum.RASH, [StatEnum.SP_ATK, StatEnum.SP_DEF]);
    this.natureDefinitions.set(NatureEnum.QUIET, [StatEnum.SP_ATK, StatEnum.SPEED]);

    this.natureDefinitions.set(NatureEnum.CALM, [StatEnum.SP_DEF, StatEnum.ATK]);
    this.natureDefinitions.set(NatureEnum.GENTLE, [StatEnum.SP_DEF, StatEnum.DEF]);
    this.natureDefinitions.set(NatureEnum.CAREFUL, [StatEnum.SP_DEF, StatEnum.SP_ATK]);
    this.natureDefinitions.set(NatureEnum.SASSY, [StatEnum.SP_DEF, StatEnum.SPEED]);

    this.natureDefinitions.set(NatureEnum.TIMID, [StatEnum.SPEED, StatEnum.ATK]);
    this.natureDefinitions.set(NatureEnum.HASTY, [StatEnum.SPEED, StatEnum.DEF]);
    this.natureDefinitions.set(NatureEnum.JOLLY, [StatEnum.SPEED, StatEnum.SP_ATK]);
    this.natureDefinitions.set(NatureEnum.NAIVE, [StatEnum.SPEED, StatEnum.SP_DEF]);
  }

  getNatureEffect(mon: Pokemon, stat: StatEnum): number {
    for (const nn of this.neutralNatures) {
      if (mon.nature === nn) {
        return 1;
      }
    }

    for (const [k, v] of this.natureDefinitions) {
      if (mon.nature === k) {
        if (stat === v[0]) {
          return 1.1;
        } else if (stat === v[1]) {
          return 0.9;
        }
      }
    }
    return 1;
  }
}

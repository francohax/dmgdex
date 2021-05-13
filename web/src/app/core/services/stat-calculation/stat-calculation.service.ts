import {Injectable} from '@angular/core';
import {Pokemon} from '../../models/BasePokemon';
import {NatureService} from '../nature/nature.service';
import {StatEnum} from '../../models/enums/StatEnum';

@Injectable({
  providedIn: 'root'
})
export class StatCalculationService {

  constructor(private natureService: NatureService) { }

  calculate(mon: Pokemon): Pokemon {
    const level = 50;
    for (const [k, v] of mon.baseStats.stats) {
      const iv = mon.ivs.stats.get(k);
      if (typeof iv !== 'number') {
        return mon;
      }

      const ev = mon.evs.stats.get(k);
      if (typeof ev !== 'number') {
        return mon;
      }

      let result = Math.floor(0.01 * (2 * v + iv + Math.floor(0.25 * ev)) * level);
      if (k === StatEnum.HP) {
        result = result + level + 10;
      } else {
        result = (result + 5) * this.natureService.getNatureEffect(mon, k);
      }

      mon.realStats.stats.set(k, Math.floor(result));
    }
    return mon;
  }
}

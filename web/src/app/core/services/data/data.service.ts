import * as data from '../../../../assets/data/data.json';
import {Injectable} from '@angular/core';
import {BasePokemon} from '../../models/BasePokemon';
import {BaseStats} from '../../models/Stats';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPokemonList(): Array<BasePokemon> {
    const pokemonList = [];
    for (const p of data.pokemon) {
      const stats = p.baseStats;
      const baseStats = new BaseStats(stats.hp, stats.attack, stats.defense, stats.specialAttack, stats.specialDefense, stats.speed);
      const basePokemon = new BasePokemon(p.id, p.name, baseStats, p.typing, p.moves, p.abilities);
      pokemonList.push(basePokemon);
    }
    return pokemonList;
  }
}

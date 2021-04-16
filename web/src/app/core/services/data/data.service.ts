import * as data from '../../../../assets/data/data.json';
import {Injectable} from '@angular/core';
import {BasePokemon} from '../../models/BasePokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPokemonList(): Array<BasePokemon> {
    const pokemonList = [];
    for (const p of data.pokemon) {
      pokemonList.push(new BasePokemon(p.id, p.name, p.baseStats, p.typing, p.moves, p.abilities));
    }
    return pokemonList;
  }
}

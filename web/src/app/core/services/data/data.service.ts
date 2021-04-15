import * as data from '../../../../assets/data/data.json';
import {Injectable} from '@angular/core';
import {Pokemon} from '../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPokemonList(): Array<Pokemon> {
    const pokemonList = [];
    for (const p of data.pokemon) {
      pokemonList.push(new Pokemon(p.id, p.name, p.typing, p.moves, p.baseStats, p.abilities));
    }
    return pokemonList;
  }
}

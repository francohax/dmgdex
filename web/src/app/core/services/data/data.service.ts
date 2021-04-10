import * as data from '../../../../assets/data/data.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMinifiedPokemonList() {

  }

  getPokemonList() {
    return data.pokemon;
  }
}

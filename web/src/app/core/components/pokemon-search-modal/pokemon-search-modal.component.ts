import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import {BasePokemon} from '../../models/BasePokemon';

@Component({
  selector: 'app-pokemon-search-modal',
  templateUrl: './pokemon-search-modal.component.html',
  styleUrls: ['./pokemon-search-modal.component.sass']
})
export class PokemonSearchModalComponent implements OnInit {

  pokemon: Array<BasePokemon>;
  displayMon: BasePokemon;

  constructor(private dataService: DataService) {
    this.pokemon = this.dataService.getPokemonList();
    this.displayMon = this.pokemon[0];
  }

  ngOnInit(): void {
  }

  setDisplayMon(pokemon: BasePokemon): void {
    this.displayMon = pokemon;
  }

}

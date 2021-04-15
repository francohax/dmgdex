import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import {Pokemon} from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-search-modal',
  templateUrl: './pokemon-search-modal.component.html',
  styleUrls: ['./pokemon-search-modal.component.sass']
})
export class PokemonSearchModalComponent implements OnInit {

  pokemon: Array<Pokemon>;
  displayMon: Pokemon;

  constructor(private dataService: DataService) {
    this.pokemon = this.dataService.getPokemonList();
    this.displayMon = this.pokemon[0];
  }

  ngOnInit(): void {
  }

  setDisplayMon(pokemon: Pokemon): void {
    this.displayMon = pokemon;
  }

}
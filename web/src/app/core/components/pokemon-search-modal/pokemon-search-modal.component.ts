import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {BasePokemon} from '../../models/BasePokemon';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-search-modal',
  templateUrl: './pokemon-search-modal.component.html',
  styleUrls: ['./pokemon-search-modal.component.sass']
})
export class PokemonSearchModalComponent implements OnInit {

  pokemon: Array<BasePokemon>;
  selectedMon: BasePokemon;
  locked = false;

  constructor(public dialog: MatDialog, private dialigRef: MatDialogRef<PokemonSearchModalComponent>, private dataService: DataService) {
    this.pokemon = this.dataService.getPokemonList();
    this.selectedMon = this.pokemon[0];
  }

  ngOnInit(): void {
  }

  setSelectedMon(pokemon: BasePokemon): void {
    if (!this.locked) {
      this.selectedMon = pokemon;
    }
  }

  lockOn(pokemon: BasePokemon): void {
    const isSameMon = this.selectedMon === pokemon;
    if (this.locked && isSameMon) {
      this.locked = false;
    } else {
      this.selectedMon = pokemon;
      this.locked = true;
    }
  }

  save(): void {
    this.dialigRef.close({data: this.selectedMon});
  }
}

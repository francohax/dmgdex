import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PokemonSearchModalComponent} from '../../components/pokemon-search-modal/pokemon-search-modal.component';
import {BasePokemon} from '../../models/BasePokemon';

@Component({
  selector: 'app-team-node',
  templateUrl: './team-node.component.html',
  styleUrls: ['./team-node.component.sass']
})
export class TeamNodeComponent implements OnInit {
  @Input()
  idx = -1;

  @Input()
  nodeMon?: BasePokemon;

  @Input()
  isActive = false;

  @Output()
  updateDisplayNodeEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.nodeMon) {
      this.isActive = !this.isActive;
      this.updateDisplayNodeEvent.emit(this.idx);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {PokemonSearchModalDialogComponent} from '../../components/pokemon-search-modal/pokemon-search-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.sass']
})
export class TeamBuilderComponent implements OnInit {
  displaySearch = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displaySearchModal(): void {
    this.displaySearch = !this.displaySearch;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PokemonSearchModalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

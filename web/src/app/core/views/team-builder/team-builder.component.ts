import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PokemonSearchModalComponent} from '../../components/pokemon-search-modal/pokemon-search-modal.component';

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.sass']
})
export class TeamBuilderComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PokemonSearchModalComponent, { panelClass: 'custom-dialog-container' } );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

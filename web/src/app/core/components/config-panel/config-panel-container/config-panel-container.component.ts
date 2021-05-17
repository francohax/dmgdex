import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfigPanelDefinition} from '../ConfigPanels';
import {Pokemon} from '../../../models/BasePokemon';

@Component({
  selector: 'app-config-panel-container',
  templateUrl: './config-panel-container.component.html',
  styleUrls: ['./config-panel-container.component.sass']
})
export class ConfigPanelContainerComponent implements OnInit {

  @Input()
  activePokemon?: Pokemon;
  @Output()
  updateEvent = new EventEmitter<Pokemon>();

  menuItems = [ConfigPanelDefinition.MOVE, ConfigPanelDefinition.EVS, ConfigPanelDefinition.IVS];
  PanelTypes = ConfigPanelDefinition;
  activePanel: ConfigPanelDefinition;
  toggleDisplay = true;

  constructor() {
    this.activePanel = this.menuItems[0];
  }

  ngOnInit(): void {
  }

  toggleConfigPanelDisplay(): void {
    this.toggleDisplay = !this.toggleDisplay;
  }

  updateDisplayPanel(def: ConfigPanelDefinition): void {
    this.activePanel = def;
  }

  updateTrigger(event: any): void {
    this.updateEvent.emit(event);
  }
}

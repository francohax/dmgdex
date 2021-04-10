import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamBuilderModule } from './views/team-builder/team-builder.module';
import { HomeModule } from './views/home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TeamBuilderModule,
    HomeModule
  ]
})
export class CoreModule { }

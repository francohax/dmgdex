import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamBuilderModule} from './views/team-builder/team-builder.module';
import {HomeModule} from './views/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    TeamBuilderModule,
    HomeModule
  ],
  declarations: []
})
export class CoreModule {
}

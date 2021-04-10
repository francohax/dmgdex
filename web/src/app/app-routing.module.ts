import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamBuilderComponent } from './core/views/team-builder/team-builder.component'

const routes: Routes = [
  { path: '', component: TeamBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

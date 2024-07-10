import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MeucompFormComponent} from "./meucomp-form/meucomp-form.component";
import {MeucompListComponent} from "./meucomp-list/meucomp-list.component";

const routes: Routes = [
  {
    path: 'meucomps',
    component: MeucompListComponent
  },
  {
    path: 'addMeucomp',
    component: MeucompFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeucompRoutingModule { }

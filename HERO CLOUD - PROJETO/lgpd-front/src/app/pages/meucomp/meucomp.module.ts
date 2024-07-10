import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeucompRoutingModule } from './meucomp-routing.module';

//alterações add esses imports
import {SharedModule} from "../../shared/shared.module";
import {MeucompFormComponent} from "./meucomp-form/meucomp-form.component";
import {MeucompListComponent} from "./meucomp-list/meucomp-list.component";


@NgModule({
  declarations: [
    MeucompListComponent,
    MeucompFormComponent
  ],
  imports: [
    CommonModule,
    MeucompRoutingModule,
    SharedModule
  ]
})
export class MeucompModule { }

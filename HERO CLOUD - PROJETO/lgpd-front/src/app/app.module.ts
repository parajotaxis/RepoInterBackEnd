import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";

import { MeucompListComponent } from './pages/meucomp/meucomp-list/meucomp-list.component';
import { MeucompFormComponent } from './pages/meucomp/meucomp-form/meucomp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MeucompListComponent,
    MeucompFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

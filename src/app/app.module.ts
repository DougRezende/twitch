import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IbopeComponent } from './ibope/ibope.component';
import { TermometroComponent } from './termometro/termometro.component';
import { AplausosComponent } from './aplausos/aplausos.component';
import { RisadasComponent } from './risadas/risadas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IbopeComponent,
    TermometroComponent,
    AplausosComponent,
    RisadasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

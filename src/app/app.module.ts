import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeModule } from './heroes/heroes.module';
import { contadorMocule } from './contador/contador/contadorModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    contadorMocule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

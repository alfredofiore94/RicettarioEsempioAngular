import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { ListaSpesaModificaComponent } from './lista-spesa/lista-spesa-modifica/lista-spesa-modifica.component';
import { RicettarioComponent } from './ricettario/ricettario.component';
import { RicettarioListaComponent } from './ricettario/ricettario-lista/ricettario-lista.component';
import { RicettarioDettaglioComponent } from './ricettario/ricettario-dettaglio/ricettario-dettaglio.component';
import { RicettarioItemComponent } from './ricettario/ricettario-lista/ricettario-item/ricettario-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaSpesaComponent,
    ListaSpesaModificaComponent,
    RicettarioComponent,
    RicettarioListaComponent,
    RicettarioDettaglioComponent,
    RicettarioItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

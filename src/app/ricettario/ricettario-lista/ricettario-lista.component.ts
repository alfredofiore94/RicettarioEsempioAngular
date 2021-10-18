import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ricetta } from '../ricetta.model';

@Component({
  selector: 'app-ricettario-lista',
  templateUrl: './ricettario-lista.component.html',
  styleUrls: ['./ricettario-lista.component.css']
})
export class RicettarioListaComponent implements OnInit {

  ricette: Ricetta[] = [new Ricetta(

    'Ricetta numero 1', 'test dec ricetta', 'https://www.mauriziotommasini.it/wp-content/uploads/2018/02/cibo_spazzatura_cancro_salute.jpg'
  ), new Ricetta(

    'Ricetta 2', 'test descrizione della seconda ricetta ricetta', 'https://www.mauriziotommasini.it/wp-content/uploads/2018/02/cibo_spazzatura_cancro_salute.jpg'
  )
  ];

  // ricetta selezionata
  @Output() ricettaSelezionata = new EventEmitter<Ricetta>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelezioneRicetta(ricetta: Ricetta) {

    // questo metodo viene chiamato quando cattura un evento di selezione sulla ricetta
    console.log('Ricetta in esame=  ' + ricetta.nome);

    // mandiamo al 'ricettario' (che è il padre sia di lista che dettaglio) la ricetta che ha lanciato la selezione
    this.ricettaSelezionata.emit(ricetta);
  }

}

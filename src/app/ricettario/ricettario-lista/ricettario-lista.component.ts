import { Component, OnInit } from '@angular/core';
import { Ricetta } from '../ricetta.model';

@Component({
  selector: 'app-ricettario-lista',
  templateUrl: './ricettario-lista.component.html',
  styleUrls: ['./ricettario-lista.component.css']
})
export class RicettarioListaComponent implements OnInit {

  ricette: Ricetta[] = [new Ricetta(

    'Test nome ricetta', 'test dec ricetta', 'https://www.mauriziotommasini.it/wp-content/uploads/2018/02/cibo_spazzatura_cancro_salute.jpg'
  ), new Ricetta(

    'Ricetta 2', 'test descrizione della seconda ricetta ricetta', 'https://www.mauriziotommasini.it/wp-content/uploads/2018/02/cibo_spazzatura_cancro_salute.jpg'
  )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Ricetta } from '../ricetta.model';

@Component({
  selector: 'app-ricettario-dettaglio',
  templateUrl: './ricettario-dettaglio.component.html',
  styleUrls: ['./ricettario-dettaglio.component.css']
})
export class RicettarioDettaglioComponent implements OnInit {

  @Input() ricettaSelezionataDt: Ricetta;
  constructor() { }

  ngOnInit(): void {
  }

}

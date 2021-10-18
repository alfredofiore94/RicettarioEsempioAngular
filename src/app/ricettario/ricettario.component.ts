import { Component, OnInit } from '@angular/core';
import { Ricetta } from './ricetta.model';

@Component({
  selector: 'app-ricettario',
  templateUrl: './ricettario.component.html',
  styleUrls: ['./ricettario.component.css']
})
export class RicettarioComponent implements OnInit {

  constructor() { }

  ricettaSelezionata: Ricetta;

  ngOnInit(): void {
  }

  testPrint(ric: Ricetta): void {
    console.log(ric);
  }

}

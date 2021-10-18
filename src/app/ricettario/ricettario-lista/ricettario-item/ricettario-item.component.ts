import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ricetta } from '../../ricetta.model';

@Component({
  selector: 'app-ricettario-item',
  templateUrl: './ricettario-item.component.html',
  styleUrls: ['./ricettario-item.component.css']
})
export class RicettarioItemComponent implements OnInit {

  // valori della ricetta per riempire l'oggetto ricetta
  @Input('ricInput') ricettaI: Ricetta;
  
  // evento di click sulla singola ricetta (tipo void)
  @Output() evSelezione = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(){

    this.evSelezione.emit();
    console.log('Ricetta selezionata')  
  }

}

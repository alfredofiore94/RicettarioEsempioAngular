import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-spesa-modifica',
  templateUrl: './lista-spesa-modifica.component.html',
  styleUrls: ['./lista-spesa-modifica.component.css']
})
export class ListaSpesaModificaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    // funzione che svuota i campi
    
  }

  addProdotto(){
    // inserte nuovo prodotto
  
  }

  deleteProdotto(){
    // elimina un prodotto inserito
  }
}

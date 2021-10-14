import { Component, OnInit } from '@angular/core';
import { Ingrediente } from './ingrediente.model';

@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {

  listaIngredienti: Ingrediente[] = []
  constructor() { }

  ngOnInit(): void {
  }

}

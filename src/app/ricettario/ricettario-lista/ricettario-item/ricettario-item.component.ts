import { Component, Input, OnInit } from '@angular/core';
import { Ricetta } from '../../ricetta.model';

@Component({
  selector: 'app-ricettario-item',
  templateUrl: './ricettario-item.component.html',
  styleUrls: ['./ricettario-item.component.css']
})
export class RicettarioItemComponent implements OnInit {

  @Input('ricInput') ricettaI: Ricetta;
  constructor() { }

  ngOnInit(): void {
  }

}

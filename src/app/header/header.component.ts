import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('pagSelAction') paginaSelezionata = new EventEmitter<String>();
  //sarà richiamata dal padre cioe AppComponent

  constructor() { }

  ngOnInit(): void {
  }

  mostraPag(pagSelect: String): void {
    this.paginaSelezionata.emit(pagSelect);
    // stiamo mandando un evento dove comunichiamo la selezione del click
    
  }
}

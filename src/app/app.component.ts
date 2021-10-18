import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RicettarioEsempioAngular';
  ricettarioFlag = false;
  listaSpesaFlag = false;

  vaiAllaSelezione(pagSelezionata: String){
  
    if(pagSelezionata === 'ricettario'){
      this.ricettarioFlag = true;
      this.listaSpesaFlag = false;
    }
    else if(pagSelezionata === 'lista_spesa'){
      this.ricettarioFlag = false;
      this.listaSpesaFlag = true;
    }
  
  }
}

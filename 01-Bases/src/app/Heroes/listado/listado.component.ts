import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log('Constructor');
   }

  ngOnInit(): void {
    console.log('On Init');
  }

  public heroes: string [] = ['Spiderman','Ironman','Hulk','Thor','Visión','BlackWidow','Capitán América','Dr. Strange'];
  public heroeEliminado: string = '';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeEliminado = this.heroes.splice(5,1).toString();
  }

}

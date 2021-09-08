import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe(paises => {
        console.log(paises);
        this.paises = paises;
        
    }, error => {
        console.log(error);
        this.hayError = true;
        this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, err => {
      this.paisesSugeridos = [];
    })
    
  }

}

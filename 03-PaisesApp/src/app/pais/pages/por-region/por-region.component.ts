import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarRegion(this.termino).subscribe(paises => {
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
    
  }

}

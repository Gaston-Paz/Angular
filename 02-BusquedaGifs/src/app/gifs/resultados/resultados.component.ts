import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  get busqueda(){
    return this.gifsService.busqueda;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
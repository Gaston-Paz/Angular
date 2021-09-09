import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 4567899876.6789;
  porcentaje: number = 0.4898;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'Gastón';
  nombreUpper: string = 'GASTON';
  nombreCompleto: string = 'gasTOn pAZ';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje(event: Personaje){
    console.log('Aca tamo');
    console.log(event);
    this.personajes.push(event);
  }

}

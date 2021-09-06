import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    this.nuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }



}

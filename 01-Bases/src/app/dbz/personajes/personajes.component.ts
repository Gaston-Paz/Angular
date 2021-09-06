import { Component, Input } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  @Input('data') personajes: Personaje[] = [];



}

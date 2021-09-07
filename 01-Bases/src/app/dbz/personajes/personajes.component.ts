import { Component} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  constructor(public dbzService: DbzService) {}

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }


}

import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(public dbzService: DbzService) { }

  ngOnInit(): void {
  }
  

  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }  

}

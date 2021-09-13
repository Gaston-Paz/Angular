import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroes[] = [];
  heroe: Heroes | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(
      heroes => this.heroes = heroes
    )
  }

  seleccionado(evento: MatAutocompleteSelectedEvent){
    if(!evento.option.value){
      this.heroe = undefined;
      return;
    }
    this.heroe = evento.option.value;
    this.termino = this.heroe!.superhero;

  }

}

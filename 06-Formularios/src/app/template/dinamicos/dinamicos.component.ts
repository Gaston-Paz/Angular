import { Component, Input, OnInit } from '@angular/core';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nuevoJuego: string = ''; 

  Persona: Persona = {
    nombre: 'Gastón',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Slug'
      },
      {
        id: 2,
        nombre: 'CSGO'
      }
    ]
  }

  guardar(){

  }

  eliminar(i:number){
    this.Persona.favoritos.splice(i,1);
  }

  agregar(){
    const nuevoFav: Favorito = {
      id: this.Persona.favoritos.length+1,
      nombre: this.nuevoJuego
    }
    this.Persona.favoritos.push({...nuevoFav});
    this.nuevoJuego = '';
  }

  
}

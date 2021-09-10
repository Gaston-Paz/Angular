import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Florencia';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'lo',
    'femenino': 'la'
  }

  clientes: string [] = ['Maria','Ruben','Dario'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando.'
  }

  persona = {
    nombre: 'Gastón',
    edad: 27,
    direccion: 'Pacheco'
  }

  heroes = [{
    nombre: 'Superman',
    vuelta: true
  },
  {
    nombre: 'Aquaman',
    vuelta: false
  },
  {
    nombre: 'Ironman',
    vuelta: true
  }]


  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  });

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona(){

    if(this.nombre == 'Florencia'){
      this.nombre = 'Gastón';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Florencia';
      this.genero = 'femenino';
    }

  }

  borrarCliente(){
    this.clientes.pop();
  }

}

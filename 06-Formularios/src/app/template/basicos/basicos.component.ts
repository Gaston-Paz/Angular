import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls.Producto?.invalid && 
    this.miFormulario?.controls.Producto?.touched;
  }

  precioValido(): boolean{
    return !(this.miFormulario?.controls.Precio?.value > 0) && 
    this.miFormulario?.controls.Producto?.touched;
  }

  guardar(){
    this.miFormulario.resetForm();
  }

}

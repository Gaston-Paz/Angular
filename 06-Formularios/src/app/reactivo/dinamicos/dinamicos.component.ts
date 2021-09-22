import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup =  this.formBuilder.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['CSGO'],
      ['FIFA']
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control(
    '', Validators.required
  );

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoInvalido(campo: string){
    return this.miFormulario.controls[campo].touched &&
    this.miFormulario.controls[campo].errors;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

  agregarFav(){

    if(this.nuevoFavorito.invalid){
      return;
    }

    const fav = this.nuevoFavorito.value;

    this.favoritosArr.push(this.formBuilder.control(
      [fav, Validators.required]
    ));

    this.nuevoFavorito.reset();

  }

  borrar(indice: number){
    this.favoritosArr.removeAt(indice);
  }

}

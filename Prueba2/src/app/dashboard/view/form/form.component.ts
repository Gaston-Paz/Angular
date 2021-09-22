import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/Interfaces/products.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    img: ['', [Validators.required, Validators.minLength(3)]]
  })

  nuevo: Products = {
    name: '',
    price: 0,
    img: ''
  };

  @Input("aEditar") aEditar: Products = {
    name: '',
    price: 0,
    img: ''
  };  

  @Input('listado') listado: Products[] = [];

  @Output() messageEvent = new EventEmitter<Products>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){

    if(this.miFormulario.valid){

      if(this.aEditar.id){

        this.nuevo = this.aEditar;
        this.miFormulario.reset();
        this.messageEvent.emit(this.nuevo);

      }
      else{
        this.nuevo.name = this.miFormulario.controls.name.value;
        this.nuevo.price = this.miFormulario.controls.price.value;
        this.nuevo.img = this.miFormulario.controls.img.value;
        this.nuevo.id = this.listado.length + 1;
        this.miFormulario.reset();
        this.messageEvent.emit(this.nuevo);

      }
    }

  }

}

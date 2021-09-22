import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Products } from '../../interfaces/Products';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    img: ['', [Validators.required, Validators.minLength(3)]]
  })

  // @ViewChild('miFormulario') miFormulario!: NgForm;

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

  @Output() messageEvent = new EventEmitter<Products>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.controls.name.setValue(this.nuevo.name);
  }

  guardar(){
    console.log("ABM");
    console.log(this.miFormulario.value);
    if(this.miFormulario.valid){
      this.nuevo.name = this.miFormulario.controls.name.value;
      this.nuevo.price = this.miFormulario.controls.price.value;
      this.nuevo.price = this.miFormulario.controls.img.value;
      console.log(this.nuevo);
      this.messageEvent.emit(this.nuevo);
    }

  }

}

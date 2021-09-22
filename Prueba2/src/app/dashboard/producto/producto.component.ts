import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../../Interfaces/products.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Output() borrar = new EventEmitter<Products>();
  @Output() editarlo = new EventEmitter<Products>();

  @Input('producto') producto: Products = {
    name: '',
    price: 0,
    img: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(producto: Products){
    this.borrar.emit(producto);
  }

  editar(producto: Products){
    this.editarlo.emit(producto);
  }

}

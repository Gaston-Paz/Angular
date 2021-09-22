import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Products } from '../../interfaces/Products';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    @Input() lista: Products[] = [];
    
    @Output() productoeditar = new EventEmitter<Products>();
    editar: Products = {
      name: '',
      price: 0,
      img: ''
    }

    constructor() { 
      
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    
    }
  
    applyFilter(event: Event) {
     }
    
     cargarForm(producto: Products){
       this.editar = producto;
       this.productoeditar.emit(this.editar);
       console.log(this.editar);

     }

}

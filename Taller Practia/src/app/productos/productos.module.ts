import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListadoComponent } from './listado/listado.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos.component';
import { AbmComponent } from './abm/abm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisProductosComponent } from './mis-productos/mis-productos.component';


@NgModule({
  declarations: [
    ListadoComponent,
    ProductoComponent,
    ProductosComponent,
    AbmComponent,
    MisProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductosModule { }

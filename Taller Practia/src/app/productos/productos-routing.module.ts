import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ListadoComponent } from './listado/listado.component';
import { AbmComponent } from './abm/abm.component';
import { ProductoComponent } from './producto/producto.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';

const routes: Routes = [
  {
    path: '',
    component: MisProductosComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'abm',
    component: AbmComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

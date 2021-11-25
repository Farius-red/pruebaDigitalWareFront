import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';


import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { DaskboardComponent } from './daskboard.component';

const routes: Routes = [

  {
    path: '',
    component: DaskboardComponent,

    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'prefix',
      },

      { path: 'admin/products', component: ProductosFormComponent },

      { path: 'admin/pedidos', component: PedidosComponent },

      { path: 'products', component: ProductosFormComponent },

      { path: 'listaProductos', component: ListaProductosComponent },

    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

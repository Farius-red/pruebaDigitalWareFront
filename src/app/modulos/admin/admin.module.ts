import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { DaskboardComponent } from './daskboard.component';

import { PedidosComponent } from './componentes/pedidos/pedidos.component';

import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';





@NgModule({
  declarations: [

    ProductosFormComponent,
    DaskboardComponent,
    PedidosComponent,
    ListaProductosComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
   

  ]
})
export class AdminModule { }

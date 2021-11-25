import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';

import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductosComponent } from './componentes/tienda/productos/productos.component';
import { DetalleproductoComponent } from './componentes/tienda/productos/detalleproducto/detalleproducto.component';
import { RouterModule } from '@angular/router';

import { RegistroUsuariosComponent } from './componentes/auth/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './componentes/auth/login/login.component';


@NgModule({
  declarations: [
    IndexComponent,
    TarjetaComponent,

    
    TiendaComponent,
    ProductosComponent,
    DetalleproductoComponent,
    LoginComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class IndexModule { }

import { DetalleproductoComponent } from './componentes/tienda/productos/detalleproducto/detalleproducto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { RegistroUsuariosComponent } from './componentes/auth/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './componentes/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,

    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'prefix',
      },


     
    
      { path: 'tienda', component: TiendaComponent },
      { path: 'tienda/:id', component: DetalleproductoComponent },
      { path: 'registro', component: RegistroUsuariosComponent },
      { path: 'login', component: LoginComponent},
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }

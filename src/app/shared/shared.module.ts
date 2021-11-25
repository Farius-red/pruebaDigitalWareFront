import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MaterialModule } from '../modulos/material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

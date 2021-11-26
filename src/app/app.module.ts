
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modulos

import { IndexModule } from './modulos/index/index.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modulos/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr'
import { interceptorProvider } from './core/servicios/product-interceptors.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    IndexModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],

  providers: [CoreModule, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

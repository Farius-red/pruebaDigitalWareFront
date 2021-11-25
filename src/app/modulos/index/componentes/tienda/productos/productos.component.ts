

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosService } from 'src/app/core/servicios/productos/productos.service';
import {ProductoConver } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  @Output() productoCliked: EventEmitter<string> = new EventEmitter();

  
  productos: ProductoConver[] = [];
  productosSinfireb: ProductoConver[] = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addCard(id: string) {

    this.productoCliked.emit(id);

  }

  getAllProducts() {

    this.productosSinfireb = this.productoService.trasformAenteros(this.productoService.getProductos());

    this.productoService.getProductosBD()
      .subscribe(res => this.productos = this.productoService.trasformAenteros(res));
  }


}

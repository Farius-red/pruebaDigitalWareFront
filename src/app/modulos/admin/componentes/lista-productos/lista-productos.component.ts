import { Producto, ProductoConver } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/core/servicios/productos/productos.service';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements AfterViewInit {


  displayedColumns = ['id', 'nombre', 'precioVenta', 'precioFabrica', 'acciones'];

  productos: ProductoConver[] = [];

  constructor(private productosService: ProductosService) {

  }

  ngOnInit(): void {
    this.listarProductos();
  }

  ngAfterViewInit(): void {
  }

  listarProductos() {
    this.productosService.getProductosBD().subscribe(product => {
      this.productos = this.productosService.trasformAenteros(product);

    });
  }


  eliminarProducto(id: string) {
    this.productosService.eliminarProducto(id).subscribe(rta => {
      if (rta) {
        this.listarProductos();
      }
    })
  }
}

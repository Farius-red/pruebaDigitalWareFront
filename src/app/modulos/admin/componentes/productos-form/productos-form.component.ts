
import { Producto } from "src/app/modelos/producto.model";
import { FormGroup } from "@angular/forms";
import { ProductosService } from './../../../../core/servicios/productos/productos.service';
import { Component } from '@angular/core';



@Component({
  selector: "app-productos-form",
  templateUrl: "./productos-form.component.html",
  styleUrls: ["./productos-form.component.css"],
})
export class ProductosFormComponent {
  productosForm!: FormGroup;
  public archivos: any = []



  constructor(private productoSevice: ProductosService) { }

  ngOnInit(): void {
    this.productosForm = this.productoSevice.ProductosForm;
  }


  capturarImagen(event: any) {
    const archivoCapturado = event.target.files[0];
    this.archivos.push(archivoCapturado);
  }

  crearProducto(): void {
    debugger;
    if (this.productosForm.valid) {
      const producto: Producto[] = [];
      console.log(this.productosForm.get('imagen')?.value)
      producto.push(this.productosForm.value);
      if (producto.length > 0) {
        producto.forEach((element) => {
          const product: Producto = {
            id: element.id,
            color: element.color,
            descripcion: element.descripcion,
            nombre: element.nombre,
            medidas: element.medidas,
            rutaImagen: element.rutaImagen,
            precioVenta: element.precioVenta,
            precioFab: element.precioFab,

          };
          this.productoSevice.crearProducto(product).subscribe((e) => {
            console.log('se creo con exito');
            this.productosForm.reset();
          });
        });
      }
    }

  }


  actualizarProducto(id: string) {

    const actualizarProducto: Partial<Producto> = {
      id: 4,
      descripcion: 'probando',


    }
    this.productoSevice.actulizarProductp(id, actualizarProducto).subscribe(
      product => {
        console.log(product);
      }
    )
  }


}

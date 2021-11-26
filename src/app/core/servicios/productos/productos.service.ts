
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria, Producto, ProductoConver } from 'src/app/modelos/producto.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {


  ProductosBD: Producto[] = [];





  ProductosForm = this.fb.group({
    id: null,
    descripcion: [null, Validators.required],
    nombre: ['', Validators.required],
    color: [null, Validators.required],
    medidas: null,
    precioVenta: [null, Validators.required],

    rutaImagen: [''],
  });




  constructor(private http: HttpClient, private fb: FormBuilder) { }


 


  getProductosBD() {
    return this.http.get<Producto[]>(`${environment.urlApi}producto/listaProductos`);
  }

  getproductosBDid(id: string) {

    return this.http.get<Producto>(`${environment.urlApi}/producto/productoId/${id}`)
  }


  productoByName(nombre: string) {
    return this.http.get<Producto>(`${environment.urlApi}/producto/productoNombre/${nombre}`)
    
  }


  crearProducto(product: Producto) {
    return this.http.post(`${environment.urlApi}/products/`, product);
  }

  actulizarProductp(id: String, changes: Partial<Producto>) {
    return this.http.put(`${environment.urlApi}/products/${id}`, changes,);
  }

  eliminarProducto(id: string) {
    return this.http.delete(`${environment.urlApi}/products/${id}`)
  }


  trasformAenteros(producto: Producto[]) {
    let arry: ProductoConver[] = [];
    producto.forEach(p => {
      let producto = {
        id: p.id.toString(),
        descripcion: p.descripcion,
        nombre: p.nombre,
        color: p.color,
        medidas: p.medidas,
        rutaImagen: p.rutaImagen,
        precioFab: p.precioFab,
        precioVenta: p.precioVenta,

      }
      arry.push(producto);
    })

    return arry;
  }

}
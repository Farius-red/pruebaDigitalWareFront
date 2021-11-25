export interface Producto {
    id: number;
    descripcion: string;
    nombre: string;
    color: string;
    medidas: string;
    rutaImagen: string;
    precioFab: number;
    precioVenta: number;

}

export interface ProductoConver {


    id?: string;
    descripcion: string;
    nombre: string;
    color: string;
    medidas: string;
    rutaImagen: string;
    precioFab: number;
    precioVenta: number;


}
export interface Categoria {
    id: string;
    nombreCategoria: string;
}

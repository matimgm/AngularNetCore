import { Categoria } from './categoria.interface';
import { Marca } from './marca.interface';

export interface Producto {
    Id: string;
    Descripcion: string;
    Precio: string;
    Categoria: Categoria;
    Marca: Marca;
}

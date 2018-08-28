import { Categoria } from './categoria.interface';
import { Marca } from './marca.interface';

export interface Producto {
    id: string;
    descripcion: string;
    precio: number;
    categoria: Categoria;
    marca: Marca;
}

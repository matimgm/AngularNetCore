import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './Interfaces/GestionProductosInterface/producto.interface';
 import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class ProductosService {
  public poductos: Observable<Producto[]>;
  public producto: Producto;
  public listProductos: Producto[];

  constructor(private http: HttpClient) {
    console.log('Servicio listo para usar!!!!');
  }


  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('/api/productos')
      .pipe(
        tap(productos => console.log('Obtiene productos' , productos)),
        catchError(this.handleError('productos', []))
      );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  // getProductos(): Producto[] {
  //   this.http.get('/api/productos').subscribe(
  //     result => {
  //       this.listProductos$ = result as Producto[];
  //       console.log(this.listProductos$);
  //     },
  //     error => console.error(error)
  //   );
  //   return this.listProductos$;
  // }

  // getProductos(): Observable<Producto[]> {
  //   this.poductos = this.http.get<Producto[]>('/api/productos');
  //   console.log(this.poductos);
  //   return this.poductos;
  //   // this.http.get('/api/productos').subscribe(
  //   //   result => {
  //   //     this.poductos = result as Producto[];
  //   //     console.log(this.poductos);
  //   //   },
  //   //   error => console.error(error)
  //   // );
  //   // const datos = this.http.get('/api/productos');
  //   // console.log(datos);
  //   // return this.poductos;
  // }

  // getProductoId(id: number) {
  //   this.http.get('/api/productos/' + id).subscribe(
  //     result => {
  //       this.producto = result as Producto;
  //     },
  //     error => console.error(error)
  //   );
  // }
}

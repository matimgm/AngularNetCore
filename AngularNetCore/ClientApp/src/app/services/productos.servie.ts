import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './Interfaces/GestionProductosInterface/producto.interface';

@Injectable()
export class ProductosService {
  public poductos: Producto[];
  public producto: Producto;
  constructor(private http: HttpClient) {
    console.log('Servicio listo para usar!!!!');
  }

  getProductos(): Producto[] {
    this.http.get('/api/productos').subscribe(
      result => {
        this.poductos = result as Producto[];
        console.log(this.poductos);
      },
      error => console.error(error)
    );
    return this.poductos;
    //    return new Promise((resolve, reject) => {
    //         this.http.get('/api/productos')
    //             .subscribe(data => {
    //                 console.log(data);
    //                 resolve(data);
    //             }, error => reject(error) );
    //     });
    //     return new Promise((resolve, reject) => {
    //         this.http.get('........')
    //           .subscribe(
    //            data => {
    //             resolve(data)
    //           },
    //            error => {
    //             reject(error);
    //           },
    //   );
    //       });
    //  this.http.get('/api/productos').subscribe(result => {
    //      this.poductos = result as Producto[];
    //      console.log(this.poductos);
    // }, error => console.error(error));
    // return this.poductos;
  }

  getProductoId(id: number) {
    this.http.get('/api/productos/' + id).subscribe(
      result => {
        this.producto = result as Producto;
      },
      error => console.error(error)
    );
  }
}

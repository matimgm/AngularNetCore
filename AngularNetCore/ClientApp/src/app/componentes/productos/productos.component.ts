import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.servie';
import { Producto } from '../../services/Interfaces/GestionProductosInterface/producto.interface';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  // public productos: Producto[] = [];
  productos$: Observable<Producto[]>;
  productos: Producto[];
  listProcutos$: Producto[];

  constructor(private _productosService: ProductosService) { }

  ngOnInit() {
      this.obtenerProductos();
  }

  obtenerProductos(): void {
    this._productosService.getProductos()
      .subscribe(productos => {
          this.productos = productos;
      });
  }
  // getProductoParse(): Observable<Array<any>> {
  //   return this._productosService
  //               .getProductos()
  //               .pipe(map(response => response));
  // }
}



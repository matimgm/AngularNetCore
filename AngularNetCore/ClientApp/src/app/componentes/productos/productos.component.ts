import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.servie';
import { Producto } from '../../services/Interfaces/GestionProductosInterface/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Producto[] = [];


  constructor(private _productosService: ProductosService) { }

  ngOnInit() {
    // this._productosService.getProductos().then(data => {
    //   console.log(data);
    // });
    console.log('Productos: ', this.productos);

     this.productos = this._productosService.getProductos();
    // console.log(this.productos);
    // this.buscarProductos()
    //   .then( res => console.log(this.productos))
    //   .catch(err => console.log('Error: !!', err));
    // this.productos = this.productosPrueba;
    // console.log('Productos = ', this.productos);
  }

  // buscarProductos(): Promise<Boolean> {
  //   return new Promise( (resolve, rejet) => {
  //     this.productos = this._productosService.getProductos();
  //     if (this.productos.length !== 0) {
  //       resolve(true);
  //     }
  //   });
  // }
}



import { NgModule } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';
import { CarouselProductosComponent } from './carousel-productos/carousel-productos.component';

@NgModule({
    declarations: [
        ProductosComponent,
        CarouselProductosComponent
      ],
    exports: [
        ProductosComponent,
        CarouselProductosComponent
    ]
})

export class ComponentModule { }

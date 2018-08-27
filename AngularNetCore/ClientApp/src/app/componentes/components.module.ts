import { NgModule } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';
import { CarouselProductosComponent } from './carousel-productos/carousel-productos.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProductosComponent,
        CarouselProductosComponent
      ],
    exports: [
        ProductosComponent,
        CarouselProductosComponent
    ],
    imports: [CommonModule]
})

export class ComponentModule { }

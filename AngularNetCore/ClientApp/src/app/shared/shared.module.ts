import { NgModule } from '@angular/core';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        PaginaErrorComponent,
        FooterComponent
      ],
    exports: [
        FooterComponent
    ]
})

export class SharedModule { }

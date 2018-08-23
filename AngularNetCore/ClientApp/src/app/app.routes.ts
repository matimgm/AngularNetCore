import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'categoria', component: CategoriaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    {path: '**', component: PaginaErrorComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

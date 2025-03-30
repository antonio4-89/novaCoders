import { Routes } from "@angular/router";
import { AdministradorComponent } from "../pages/administrador/administrador.component";
import { ProductosComponent } from "../pages/productos/productos.component";

export const HomeRoutes: Routes = [
    
    // { path: '', redirectTo: '/ventas' }
    { path: 'ventas', component: AdministradorComponent },
    { path: 'productos', component: ProductosComponent }

]
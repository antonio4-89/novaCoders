import { NgModule } from '@angular/core'
import { AdministradorComponent } from './administrador/administrador.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
    declarations: [
        AdministradorComponent,
        ProductosComponent
    ],
    imports: [
CommonModule,
IonicModule.forRoot()
    ],
    exports: [
        AdministradorComponent,
        ProductosComponent
    ]
})

export class PagesModule {}
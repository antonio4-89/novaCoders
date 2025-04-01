import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { AddProductoComponent } from "./add-producto/add-producto.component";
import { PopoverAvisoComponent } from "./popover/popover-aviso/popover-aviso.component";
import { PopoverConfirmacionComponent } from "./popover/popover-confirmacion/popover-confirmacion.component";

@NgModule({
    declarations: [
        AddProductoComponent,
        PopoverAvisoComponent,
        PopoverConfirmacionComponent
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        ReactiveFormsModule
    ],
    exports: [
        AddProductoComponent,
        PopoverAvisoComponent,
        PopoverConfirmacionComponent
    ]
})

export class ComponentsModule{}
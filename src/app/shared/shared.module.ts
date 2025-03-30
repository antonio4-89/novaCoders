import { NgModule } from "@angular/core"

import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule
    ],
    exports: [
        NavbarComponent,
        SidebarComponent
    ]
})

export class SharedModule{

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: false
})
export class ProductosComponent  implements OnInit {

  // collection: Producto[] = [] ;
  collectionOriginal: any = [];

  constructor( 
    private apiService: ApiService,
    private modal: ModalController
   ) { }


ngOnInit(): void {
this.apiService.getProductos()
// .subscribe( (productos: Producto[]) => {this.collectionOriginal.push( ...productos )} )
.subscribe( (productos: any[]) => {this.collectionOriginal.push( ...productos )} )
}

// async productoShop( producto: Producto ) {
//   const modals = await this.modal.create({
//     component: ProductoComponent,
//     componentProps: { producto },
//     backdropDismiss: false,
//     cssClass: 'modal2',
//   });
//   await modals.present();
// }


}

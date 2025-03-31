import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, AlertController } from '@ionic/angular';

import { Producto } from 'src/app/interfaces/producto.interface';
import { ApiGeneral } from 'src/app/services/apiGeneral.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: false
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  ingredientes: Producto[] = []
  // p: number = 1;
  // textoBuscar: string = "";
  // productosAll: Producto[] = [];

  constructor(
    public modalController: ModalController,
    private apiGeneral: ApiGeneral 
    ) { }

  ngOnInit() {

this.apiGeneral.getCollectionChanges('producto').subscribe(
  resp => { 
    console.log(resp)
    this.productos = resp;
    this.ingredientes = resp[0].ingredientes
    console.log( this.ingredientes )
   }
)

  }

  
}
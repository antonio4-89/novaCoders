import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, PopoverController } from '@ionic/angular';
import { ApiGeneral } from 'src/app/services/apiGeneral.service';
import { PopoverAvisoComponent } from '../popover/popover-aviso/popover-aviso.component';
import { PopoverConfirmacionComponent } from '../popover/popover-confirmacion/popover-confirmacion.component';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss'],
  standalone: false
})
export class AddProductoComponent  implements OnInit {
  
  addProducto!: FormGroup;
  constructor( 
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private apiService: ApiGeneral,
    private popoverCtrl: PopoverController
   ) { }

  ngOnInit() {
    this.addProducto = this.fb.group({
      nombreProducto: [],
      cantidad: [],
      precio: [],
      disponible: [],
      ingredientes: []

    })
  }

  async popoverAviso(titulo:string , tpp:string, mensaje: string){
    const pop = await this.popoverCtrl.create({
      component: PopoverAvisoComponent,
      backdropDismiss: true,
      componentProps:{
        tituloMensaje: titulo,
        mensaje:mensaje,
        tipoPopover: tpp
      }
    })
     await pop.present();
  }

  async popoverConfirmacion() {
    const popover = await this.popoverCtrl.create({
      component: PopoverConfirmacionComponent,
      translucent: true,
      backdropDismiss: false,
      componentProps: {
        tipoPopover:"OK",
        tituloMensaje: "AGREGAR",
        mensaje: "¿Estas seguro de agregar el registro?",
      },
      cssClass: "popover-width"
    });

    await popover.present();
    const { data } = await popover.onWillDismiss();
    return data.resultado;
  }

  async enviarProducto(){
    const REPOSNSE = await this.popoverConfirmacion();
    if( REPOSNSE ){

      const RESP = this.apiService.createItem(this.addProducto.value)
      if((await RESP).status == "success"){
        this.popoverAviso("Registro generado exitosamente","OK","")
        this.addProducto.reset()
        return
      }
      
      this.popoverAviso("No se pudo agregar","ERROR","Verifique los campos")
      return
    }

  
}

cancelar(){
this.modalCtrl.dismiss()
}


}
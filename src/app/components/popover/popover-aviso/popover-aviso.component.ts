import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-popover-aviso',
  templateUrl: './popover-aviso.component.html',
  styleUrls: ['./popover-aviso.component.scss'],
  standalone: false
})
export class PopoverAvisoComponent  implements OnInit {

  @Input() mensaje :string = "";
  @Input() tituloMensaje :string = "";
  @Input() tipoPopover :string = "";

  constructor(public popCtrl: PopoverController) { }

  ngOnInit() {
  }


  cerrar() {
    this.popCtrl.dismiss({resultado: false});
  }

}

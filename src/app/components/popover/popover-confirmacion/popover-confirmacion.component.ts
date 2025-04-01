import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-confirmacion',
  templateUrl: './popover-confirmacion.component.html',
  styleUrls: ['./popover-confirmacion.component.scss'],
  standalone: false
})
export class PopoverConfirmacionComponent  implements OnInit {
  @Input() tituloMensaje : string = "";
  @Input() mensaje :string = "";
  @Input() tipoPopover : string = "";


  constructor(public popCtrl: PopoverController) { }

  ngOnInit() {}

  confirmar() {
    this.popCtrl.dismiss({resultado: true});
    
  }

  cancelar() {
    this.popCtrl.dismiss({resultado: false});
   }

}
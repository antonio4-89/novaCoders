import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
export class AddProductoComponent implements OnInit {
  
  addProducto!: FormGroup;
  numeroIngredientes: number = 0;
  ingredientesArray: string[] = [];

  constructor( 
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private apiService: ApiGeneral,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.addProducto = this.fb.group({
      nombreProducto: [''],
      cantidad: [''],
      precio: [''],
      disponible: ['true'],
      ingredientes: [''],
      numeroIngredientes: [0]
    });

    // Suscribirse a cambios en el número de ingredientes
    this.addProducto.get('numeroIngredientes')?.valueChanges.subscribe(value => {
      if (value !== this.numeroIngredientes) {
        this.numeroIngredientes = value || 0;
        this.actualizarIngredientes();
      }
    });
  }

  // Método para manejar el cambio en el número de ingredientes
  onNumeroIngredientesChange(event: any) {
    const value = parseInt(event.detail.value) || 0;
    this.addProducto.patchValue({ numeroIngredientes: value });
  }

  // Método para manejar los cambios en cada ingrediente individual
  onIngredienteChange(event: any, index: number) {
    if (index >= 0 && index < this.ingredientesArray.length) {
      this.ingredientesArray[index] = event.detail.value || '';
      // Actualizar el campo oculto con la lista completa
      this.actualizarCampoIngredientes();
    }
  }

  // Actualizar el campo de ingredientes en el formulario
  actualizarCampoIngredientes() {
    const ingredientesTexto = this.ingredientesArray
      .filter(i => i && i.trim() !== '')
      .join(', ');
    
    this.addProducto.patchValue({
      ingredientes: ingredientesTexto
    });
  }

  // Métodos para manejar ingredientes dinámicos
  actualizarIngredientes() {
    // Asegurarse de que numeroIngredientes no sea negativo
    if (this.numeroIngredientes < 0) {
      this.numeroIngredientes = 0;
      this.addProducto.patchValue({ numeroIngredientes: 0 });
    }
    
    if (this.numeroIngredientes > this.ingredientesArray.length) {
      // Agregar nuevos campos vacíos
      const nuevos = this.numeroIngredientes - this.ingredientesArray.length;
      for (let i = 0; i < nuevos; i++) {
        this.ingredientesArray.push('');
      }
    } else {
      // Reducir el array
      this.ingredientesArray = this.ingredientesArray.slice(0, this.numeroIngredientes);
    }
    
    // Actualizar el campo de ingredientes en el formulario
    this.actualizarCampoIngredientes();
  }

  eliminarIngrediente(index: number) {
    if (index >= 0 && index < this.ingredientesArray.length) {
      this.ingredientesArray.splice(index, 1);
      this.numeroIngredientes = this.ingredientesArray.length;
      this.addProducto.patchValue({ numeroIngredientes: this.numeroIngredientes });
      this.actualizarCampoIngredientes();
    }
  }

  async popoverAviso(titulo: string, tpp: string, mensaje: string) {
    const pop = await this.popoverCtrl.create({
      component: PopoverAvisoComponent,
      backdropDismiss: true,
      componentProps: {
        tituloMensaje: titulo,
        mensaje: mensaje,
        tipoPopover: tpp
      }
    });
    await pop.present();
  }

  async popoverConfirmacion() {
    const popover = await this.popoverCtrl.create({
      component: PopoverConfirmacionComponent,
      translucent: true,
      backdropDismiss: false,
      componentProps: {
        tipoPopover: "OK",
        tituloMensaje: "AGREGAR",
        mensaje: "¿Estás seguro de agregar el registro?",
      },
      cssClass: "popover-width"
    });

    await popover.present();
    const { data } = await popover.onWillDismiss();
    return data.resultado;
  }

  async enviarProducto() {
    // La actualización del campo ingredientes ya se hace automáticamente
    // al actualizar cada ingrediente individual

    const RESPONSE = await this.popoverConfirmacion();
    if (RESPONSE) {
      const RESP = this.apiService.createItem(this.addProducto.value);
      
      if ((await RESP).status == "success") {
        this.popoverAviso("Registro generado exitosamente", "OK", "");
        this.addProducto.reset();
        this.ingredientesArray = [];
        this.numeroIngredientes = 0;
        return;
      }
      
      this.popoverAviso("No se pudo agregar", "ERROR", "Verifique los campos");
      return;
    }
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
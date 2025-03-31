import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: false
})
export class AuthComponent  implements OnInit {

  email: string = '';

  sweetForm!: FormGroup;
  constructor( 
    private fb: FormBuilder, 
    private route: Router,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.sweetForm = this.fb.group({
      email: ['', [Validators.required]],  // Validación para email
      password: ['', [Validators.required]] // Validación para la contraseña
    });
  }

  async submit(){
    if (this.sweetForm.invalid) return;
    try{
    const { email, password} = this.sweetForm.value ; 
    if (!email || !password) return;

    await this.authService.signIn({email, password})

  this.route.navigateByUrl('/ventas')

  } catch(error){

  }
}
async resetPassword() {
  const alert = await this.alertCtrl.create({
    header: 'Restablecer contraseña',
    inputs: [
      {
        name: 'email',
        type: 'email',
        placeholder: 'Tu correo electrónico',
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Enviar',
        handler: async (data) => {
          try {
            await this.authService.resetPassword(data.email);
            this.showAlert('Éxito', 'Revisa tu correo para el enlace de restablecimiento.');
          } catch (error) {
            this.showAlert('Error', 'No se pudo enviar el correo. Verifica el email.');
          }
        },
      },
    ],
  });

  await alert.present();
}

private async showAlert(title: string, message: string) {
  const alert = await this.alertCtrl.create({
    header: title,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}

}

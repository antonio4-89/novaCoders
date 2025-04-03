import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-employed',
  templateUrl: './new-employed.component.html',
  styleUrls: ['./new-employed.component.scss'],
  standalone: false
})
export class NewEmployedComponent implements OnInit {

  newEmployed!: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.newEmployed = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async enviarForm() {
    if (this.newEmployed.invalid) return;
    
    try {
      const { email, password } = this.newEmployed.value; 
      if (!email || !password) return;

      console.log({email, password});
      await this.authService.signUp({email, password});
      this.modalCtrl.dismiss();
    } catch(error) {
      console.error('Error en el registro:', error);
      // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario
    }
  }

  cancelarForm() {
    // Limpiar el formulario
    this.newEmployed.reset();
    // Cerrar el modal
    this.modalCtrl.dismiss();
    // Alternativamente, podrías navegar a otra página:
    // this.route.navigate(['/login']);
  }
}
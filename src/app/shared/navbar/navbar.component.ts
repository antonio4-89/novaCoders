import { Component, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent  {

  constructor(
    private auth: Auth,  // Inyecta el servicio de Auth de Firebase
    private router: Router
  ) {}

  async salir() {
    try {
      await signOut(this.auth);  // Cierra sesión en Firebase
      this.router.navigate(['/sign-in']);  // Redirige al login
      // this.limpiarFormulario();  // Opcional: Limpia datos del formulario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }


}

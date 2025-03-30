import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: false
})
export class AuthComponent  implements OnInit {

  sweetForm!: FormGroup;
  constructor( 
    private fb: FormBuilder, 
    private route: Router,
    private authService: AuthService
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


}

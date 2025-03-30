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
export class NewEmployedComponent  implements OnInit {

  
  constructor( 
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private modalCtrl: ModalController
   ) { }

  newEmployed!: FormGroup

  ngOnInit() {
   this.newEmployed = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
  
    })
  }

 async enviarForm(){
// 
if (this.newEmployed.invalid) return;
    

try{
const { email, password} = this.newEmployed.value ; 

if (!email || !password) return;

console.log({email, password})

await this.authService.signUp({email, password})
    // Alerta exitosa
// this._router.navigateByUrl('/tasks')
this.modalCtrl.dismiss()

} catch(error){
// Alerta erronea

  }

}
}

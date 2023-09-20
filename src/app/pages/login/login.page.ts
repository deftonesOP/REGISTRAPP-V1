import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario:string='';
  password:string='';

  constructor(private router: Router, private toastCtrl:ToastController) { }

  ngOnInit() {
  }
  
  async irMenu(){
    if (this.usuario=="admin" && this.password=="1234") {
        this.router.navigate(['/menu']);  
    } else if (this.usuario == "alumno" && this.password == "1234") {
      this.router.navigate(['/alumno']); // Acceso pa el usuario "alumno"

    }else{
        let m = this.toastCtrl.create({
          message:"Las credenciales son incorrectas",
          duration:3000,
          position:'middle'
        });
         (await m).present();
    }
    
  }

  irRegistrar() {
    this.router.navigate(['/registrar']); // Redirige a la página "registrar"
  }

}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  irHome() {
    this.router.navigate(['/home']);
  }

  irUser() {
    this.router.navigate(['/user']);
  }

  openNotifications() {
    this.menuCtrl.enable(true, 'notifications-menu');
    this.menuCtrl.open('notifications-menu');
  }
}


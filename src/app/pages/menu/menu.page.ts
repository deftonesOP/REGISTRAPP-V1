import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalMenuComponent } from 'src/app/modal-menu/modal-menu.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(private router: Router, private menuCtrl: MenuController,private modalController: ModalController) {}

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

  irAConectarDisp() {
    this.router.navigate(['/conectar-disp']);
  }
  
  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalMenuComponent ,
    });
    return await modal.present();
  }

}


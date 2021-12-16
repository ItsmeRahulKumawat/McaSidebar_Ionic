import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public alertController: AlertController,public router: Router) {}
  async feed() {
    const alert1 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: '',
      message: `Are you sure you want to logout?`,
      buttons: ['OK', 'Cancel']
    });
    await alert1.present();
  }
  myFunction()
  {
  const r= confirm('Are you sure you want to Logout');
  if (r===true)
  {
    this.router.navigate(['/login']);
    }
else
  {
    this.router.navigate(['/home']);
  }
}
}

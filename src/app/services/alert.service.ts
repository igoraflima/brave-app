import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController
  ) { }

  async showAlert(header: string = '', buttons: Array<any> = []) {
    const alert = await this.alertController.create({
      header: header,
      buttons: buttons
    });

    this.presentAlert(alert);
  }

  async showAlertWithSubHeader(header: string = '', subtHeader: string = '', buttons: Array<any> = []) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtHeader,
      buttons: buttons
    });

    this.presentAlert(alert);
  }

  private async presentAlert(alert: any): Promise<void> {
    await alert.present();
  }
}

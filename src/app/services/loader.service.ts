import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present() {
    this.isLoading = true;
    // TODO: REPORT BUG TO IONIC, EL BUG ES QUE NO SE CANCELA EL LOADER SI NO LE DAS UNA DURACION ESPECIFICA, TENER CUIDADO CON ESTO
    return await this.loadingController.create({
      duration: 1000,
      message: 'cargando...'
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}

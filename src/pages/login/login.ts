import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login-response.interface';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'app-page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private toast: ToastController) {
  }

  login(event: LoginResponse) {
    if(!event.error){
      this.toast.create({
        message: `Välkommen till appen!, ${event.result.email} `,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('HomePage');
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

  navigateToPage() {
    
  }

}
